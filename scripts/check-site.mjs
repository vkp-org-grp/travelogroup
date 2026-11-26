// Site test: crawls every sitemap and internally linked page, then checks
// for 404s, broken links/images, redirecting links and basic SEO tags.
//
//   npm run build && npm start        (terminal 1)
//   npm run test:site                 (terminal 2)
//
// Optional: BASE_URL=http://localhost:3000
import http from 'node:http';
import { parse } from 'parse5';
import { site } from '../data/site.js';

const BASE = (process.env.BASE_URL || 'http://localhost:3000').replace(/\/$/, '');
const errors = [];
const warnings = [];

const walk = (node, fn) => { fn(node); (node.childNodes || []).forEach((c) => walk(c, fn)); };
const attr = (n, name) => n.attrs?.find((a) => a.name === name)?.value;
const textOf = (n) => { let s = ''; walk(n, (x) => { if (x.nodeName === '#text') s += x.value; }); return s.trim(); };

const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
const sitemapPaths = [...(await sitemapRes.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
if (!sitemapPaths.length) errors.push('sitemap.xml is empty or missing');

const queue = [...new Set(['/', ...sitemapPaths])];
const seen = new Set(queue);
const assets = new Map(); // url -> first page using it
const pages = [];
const ids = new Map();
const hashLinks = [];

while (queue.length) {
  const path = queue.shift();
  const res = await fetch(BASE + path, { redirect: 'manual' });
  if (res.status !== 200) { errors.push(`${res.status} page ${path}`); continue; }
  if (!(res.headers.get('content-type') || '').includes('text/html')) continue;
  const doc = parse(await res.text());
  const page = { path, h1: 0, title: '', description: '', canonical: '', ogImage: '', robots: '' };
  const pageIds = new Set();
  walk(doc, (n) => {
    const tag = n.tagName;
    if (attr(n, 'id')) pageIds.add(attr(n, 'id'));
    if (tag === 'h1') page.h1++;
    if (tag === 'title' && !page.title) page.title = textOf(n);
    if (tag === 'meta') {
      if (attr(n, 'name') === 'description') page.description = attr(n, 'content');
      if (attr(n, 'name') === 'robots') page.robots = attr(n, 'content');
      if (attr(n, 'property') === 'og:image') page.ogImage = attr(n, 'content');
    }
    if (tag === 'link' && attr(n, 'rel') === 'canonical') page.canonical = attr(n, 'href');
    if (tag === 'script' && attr(n, 'type') === 'application/ld+json') {
      try { JSON.parse(textOf(n)); } catch { errors.push(`invalid JSON-LD on ${path}`); }
    }
    if (tag === 'img') {
      if (attr(n, 'alt') === undefined) errors.push(`image without alt on ${path}: ${attr(n, 'src')}`);
      const src = attr(n, 'src');
      if (src && !src.startsWith('data:') && !assets.has(src)) assets.set(src, path);
    }
    if (tag === 'a') {
      const href = attr(n, 'href');
      if (!href || href === '#') { errors.push(`empty link on ${path}: "${textOf(n).slice(0, 40)}"`); return; }
      if (/^(tel:|mailto:|https?:)/.test(href) && !href.startsWith(site.url)) return;
      const url = new URL(href.replace(site.url, ''), BASE + path);
      if (url.hash) hashLinks.push({ from: path, to: url.pathname, hash: url.hash.slice(1) });
      if (/\.[a-z0-9]+$/i.test(url.pathname)) { if (!assets.has(url.pathname)) assets.set(url.pathname, path); return; }
      if (!url.pathname.endsWith('/')) warnings.push(`link without trailing slash on ${path}: ${href}`);
      const target = url.pathname.replace(/\/?$/, '/');
      if (!seen.has(target)) { seen.add(target); queue.push(target); }
    }
  });
  ids.set(path, pageIds);
  pages.push(page);
}

for (const [src, from] of assets) {
  const res = await fetch(new URL(src, BASE + from), { redirect: 'follow' });
  if (!res.ok) errors.push(`${res.status} asset ${src} (on ${from})`);
}
for (const l of hashLinks) {
  if (ids.has(l.to) && !ids.get(l.to).has(l.hash)) warnings.push(`missing #${l.hash} on ${l.to} (linked from ${l.from})`);
}

// ── SEO ──
for (const p of pages) {
  if (p.h1 !== 1) errors.push(`${p.h1} <h1> tags on ${p.path}`);
  if (!p.title) errors.push(`no title on ${p.path}`);
  if (!p.description) errors.push(`no meta description on ${p.path}`);
  if (p.canonical !== site.url + p.path) errors.push(`wrong canonical on ${p.path}: ${p.canonical || '(none)'}`);
  if (!p.ogImage) errors.push(`no og:image on ${p.path}`);
  if (!sitemapPaths.includes(p.path)) warnings.push(`not in sitemap: ${p.path}`);
}
for (const key of ['title', 'description']) {
  const groups = new Map();
  pages.forEach((p) => p[key] && groups.set(p[key], [...(groups.get(p[key]) || []), p.path]));
  for (const [value, list] of groups) if (list.length > 1) errors.push(`duplicate ${key} "${value.slice(0, 60)}": ${list.join(', ')}`);
}
const noindex = pages.filter((p) => p.robots.includes('noindex')).length;
if (noindex) warnings.push(`${noindex}/${pages.length} pages are "noindex" — search engines will not list them`);

// ── 404 and www redirect ──
const missing = await fetch(`${BASE}/this-page-does-not-exist/`);
if (missing.status !== 404) errors.push(`unknown URL returned ${missing.status}, expected 404`);

// fetch() cannot override the Host header, so use http.request
const asWww = (path) => new Promise((resolve, reject) => {
  const url = new URL(path, BASE);
  if (url.protocol !== 'http:') return resolve(null);
  http.get(url, { headers: { host: `www.${new URL(site.url).host}` } }, (res) => {
    res.resume();
    resolve(`${res.statusCode} ${res.headers.location}`);
  }).on('error', reject);
});
for (const path of ['/', '/about/', '/blog/', sitemapPaths.at(-1), '/sitemap.xml', '/robots.txt']) {
  const got = await asWww(path);
  if (got && got !== `308 ${site.url}${path}`) errors.push(`www redirect for ${path}: got ${got}`);
}

console.log(`Checked ${pages.length} pages, ${assets.size} images/files, ${sitemapPaths.length} sitemap URLs`);
const print = (label, list) => {
  console.log(`\n${label}: ${list.length}`);
  [...new Set(list)].slice(0, 40).forEach((l) => console.log('  - ' + l));
};
print('Warnings', warnings);
print('Errors', errors);
process.exit(errors.length ? 1 : 0);

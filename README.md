# Travelo Group — Next.js rebuild

Next.js 14 (App Router) + Tailwind + Framer Motion. Blog runs on **headless
WordPress via WPGraphQL**; everything else is static, built at deploy time.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — tested, passes clean (76 pages)
```

## Site structure (76 pages, matches the original site 1:1)

```
/                                    Home
/about  /contact
/group-booking                       index
/group-booking/[slug]                18 airline pages
/business-class                      index
/business-class/[slug]               12 premium-cabin pages
/deals                               index
/deals/[slug]                        16 seasonal/route deals
/destinations                        index
/destinations/[slug]                 10 destination pages (fixes the 4 dead
                                      "#" links from the old WordPress site —
                                      New York, Toronto, Istanbul, Bali)
/blog                                index — reads from WordPress
/blog/[slug]                         post — reads from WordPress
/privacy-policy /refund-policy /terms-condition
/sitemap.xml /robots.txt             auto-generated, covers all 76 routes
```

## Editing content (no CMS needed)

Everything except the blog lives in `data/`:

| File | Powers |
|---|---|
| `data/site.js` | Phone, email, address, nav |
| `data/airlines.js` | 18 group-booking pages |
| `data/businessClass.js` | 12 premium-cabin pages |
| `data/deals.js` | 16 seasonal/deal pages |
| `data/destinations.js` | 10 destination pages |
| `data/content.js` | Home page: why-us, stats, testimonials, FAQ |

Add or edit an entry in the array → the page is generated automatically via
`generateStaticParams()`. No routing code to touch.

## Blog — connecting WordPress (headless)

The blog is the one thing that changes often, so it's wired to your existing
WordPress install as a headless CMS instead of hardcoded data.

**One-time setup on WordPress:**

1. Install and activate the **WPGraphQL** plugin (free, on wordpress.org).
2. Optionally install **WPGraphQL SEO** if you use Yoast, so `seo.title` /
   `seo.metaDesc` come through per-post.
3. Confirm `https://your-wp-site.com/graphql` responds (WPGraphQL's default
   endpoint).

**One-time setup here:**

1. Copy `.env.example` to `.env.local`.
2. Set `WORDPRESS_API_URL=https://your-wp-site.com/graphql`.
3. Redeploy. `/blog` and `/blog/[slug]` will now pull real posts.

Until this is set, the blog renders 3 placeholder posts (see
`lib/wordpress.js` → `MOCK_POSTS`) so the site still builds.

**Keeping it fast without redeploying on every post:**

- Pages revalidate automatically every hour (`revalidate = 3600` in
  `app/blog/page.js` and `app/blog/[slug]/page.js`).
- For instant updates the moment you hit Publish, install a webhook plugin
  on WordPress (e.g. "WP Webhooks") and point it at:
  ```
  POST https://travelogroup.com/api/revalidate?secret=YOUR_REVALIDATE_SECRET
  ```
  on the `publish_post` / `save_post` event. Set the same secret in
  `REVALIDATE_SECRET` in `.env.local`. See `app/api/revalidate/route.js`.

## Forms

Two forms are UI-only right now, both marked `// TODO`:

- `components/SearchWidget.jsx` (home page quote form)
- `app/contact/page.js` (contact form)

Wire these to your CRM / lead endpoint / email service.

## SEO fixes vs. the old WordPress site

- **Dead links fixed** — New York, Toronto, Istanbul, Bali destination pages
  now exist (`/destinations/[slug]`) instead of pointing at `#`.
- **`sitemap.xml` and `robots.txt`** are auto-generated (`app/sitemap.js`,
  `app/robots.js`) and cover all 76 routes, including blog posts pulled live
  from WordPress.
- **No duplicate/templated content** — each of the 18 airline pages, 12
  business-class pages, and 16 deal pages has distinct copy (hub, alliance,
  fleet, or deal-specific tips) instead of one template with the name
  swapped.
- **Per-page metadata + JSON-LD** — every dynamic page sets its own
  `title`/`description` via `generateMetadata()`; airline pages include
  `Service` schema, blog posts include `Article` schema.
- **No Elementor/page-builder weight** — this is why the rebuild is faster
  than the WordPress original to begin with.

## 301 redirects — do this before going live

The old WordPress URLs need to map to the same paths here (they mostly
already do, since slugs were kept identical) or forward to the new ones.
Check your host's redirect rules or `next.config.mjs` → `redirects()` for
any URL that doesn't match 1:1, so existing rankings and backlinks carry
over instead of resetting.

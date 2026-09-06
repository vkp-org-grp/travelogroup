import { site } from '@/data/site';
import { airlines } from '@/data/airlines';
import { businessClass } from '@/data/businessClass';
import { deals } from '@/data/deals';
import { destinations } from '@/data/destinations';
import { getAllPosts } from '@/lib/wordpress';

export default async function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { url: '/', priority: 1 },
    { url: '/about', priority: 0.7 },
    { url: '/contact', priority: 0.6 },
    { url: '/group-booking', priority: 0.9 },
    { url: '/premium-class', priority: 0.8 },
    { url: '/deals', priority: 0.8 },
    { url: '/destinations', priority: 0.7 },
    { url: '/blog', priority: 0.7 },
    { url: '/privacy-policy', priority: 0.3 },
    { url: '/refund-policy', priority: 0.3 },
    { url: '/terms-condition', priority: 0.3 },
  ].map((r) => ({
    url: `${site.url}${r.url}`,
    lastModified: now,
    priority: r.priority,
  }));

  const airlineRoutes = airlines.map((a) => ({
    url: `${site.url}/group-booking/${a.slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  const businessRoutes = businessClass.map((b) => ({
    url: `${site.url}/premium-class/${b.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const dealRoutes = deals.map((d) => ({
    url: `${site.url}/deals/${d.slug}`,
    lastModified: now,
    priority: 0.6,
  }));

  const destinationRoutes = destinations.map((d) => ({
    url: `${site.url}/destinations/${d.slug}`,
    lastModified: now,
    priority: 0.6,
  }));

  let blogRoutes = [];
  try {
    const posts = await getAllPosts();
    blogRoutes = posts.map((p) => ({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: p.modified ? new Date(p.modified) : now,
      priority: 0.6,
    }));
  } catch {
    blogRoutes = [];
  }

  return [
    ...staticRoutes,
    ...airlineRoutes,
    ...businessRoutes,
    ...dealRoutes,
    ...destinationRoutes,
    ...blogRoutes,
  ];
}

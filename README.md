# Travelogroup — Next.js rebuild

Next.js 14 (App Router) + Tailwind + Framer Motion. The whole site, including
the blog, is static and built at deploy time; no CMS is needed.

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
/premium-class                        index
/premium-class/[slug]                 12 premium-cabin pages
/deals                               index
/deals/[slug]                        16 seasonal/route deals
/destinations                        index
/destinations/[slug]                 10 destination pages (fixes the 4 dead
                                      "#" links from the old WordPress site —
                                      New York, Toronto, Istanbul, Bali)
/blog                                index — from data/blogPosts.js
/blog/[slug]                         post — from data/blogPosts.js
/privacy-policy /refund-policy /terms-condition
/sitemap.xml /robots.txt             auto-generated, covers all 76 routes
```

## Editing content

Content lives in `data/`:

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

## Blog (local, no CMS)

To add a post:

1. Create the body component in `components/blog/articles/<slug>.jsx` and
   register it in that folder's `index.js`.
2. Add its details (title, excerpt, dates, image, SEO text) at the top of
   `data/blogPosts.js`.
   Wrap the FAQ section in `<div className="faq">` and give each question
   `className="faq-question"` so it gets the FAQ styling.
3. Put images in `public/images/blog/`. Link to internal pages with relative
   URLs ending in a slash, e.g. `/group-booking/`.

## Testing

```bash
npm run build && npm start   # terminal 1
npm run test:site            # terminal 2: 404s, broken links/images, SEO tags
```

## Forms

The quote and contact forms send mail through Zoho SMTP
(`app/api/quote`, `app/api/contact`). Copy `.env.example` to `.env.local` and
set the SMTP values there and on the host.

## SEO fixes vs. the old WordPress site

- **Dead links fixed** — New York, Toronto, Istanbul, Bali destination pages
  now exist (`/destinations/[slug]`) instead of pointing at `#`.
- **`sitemap.xml` and `robots.txt`** are auto-generated (`app/sitemap.js`,
  `app/robots.js`) and cover all 76 routes, including blog posts.
- **No duplicate/templated content** — each of the 18 airline pages, 12
  premium-class pages, and 16 deal pages has distinct copy (hub, alliance,
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

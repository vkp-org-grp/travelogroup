// ─────────────────────────────────────────────────────────────
// Blog runs on headless WordPress via the WPGraphQL plugin.
// Set WORDPRESS_API_URL in .env.local once your WP install has
// WPGraphQL active — until then this falls back to mock posts
// below so the /blog routes build and render.
//
// Pages use `revalidate = 3600` (see app/blog/page.js) for
// time-based ISR. For instant updates on publish, add the
// WP Webhooks plugin pointed at /api/revalidate (see that route).
// ─────────────────────────────────────────────────────────────

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

const POST_FIELDS = `
  id
  slug
  title
  excerpt
  date
  modified
  content
  featuredImage {
    node { sourceUrl altText }
  }
  seo {
    metaDesc
    title
  }
`;

async function wpFetch(query, variables = {}) {
  if (!WORDPRESS_API_URL) return null;

  try {
    const res = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600, tags: ['blog'] },
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (json.errors) {
      console.error('WPGraphQL error:', json.errors);
      return null;
    }
    return json.data;
  } catch (err) {
    console.error('WPGraphQL fetch failed:', err);
    return null;
  }
}

// ── Mock fallback so the site builds before WPGraphQL is wired up ──
const MOCK_POSTS = [
  {
    id: '1',
    slug: 'how-united-group-reservations-help-businesses-save-on-team-travel',
    title: 'How United Group Reservations Help Businesses Save on Team Travel',
    excerpt: 'What a group PNR actually changes for a company booking 10 or more employees on the same trip.',
    date: '2026-05-20',
    modified: '2026-05-20',
    content:
      '<p>This post is placeholder content. Connect WPGraphQL (see lib/wordpress.js) to pull real posts from your WordPress install.</p>',
    featuredImage: {
      node: {
        sourceUrl:
          '/images/1436491865332-7a61a109cc05.jpg',
        altText: 'United Airlines aircraft',
      },
    },
    seo: null,
  },
  {
    id: '2',
    slug: 'need-cheap-flights-try-bulk-air-ticket-booking-today',
    title: 'Need Cheap Flights? Try Bulk Air Ticket Booking Today',
    excerpt: 'How consolidator group fares differ from the price you see on a standard search page.',
    date: '2026-04-17',
    modified: '2026-04-17',
    content:
      '<p>This post is placeholder content. Connect WPGraphQL (see lib/wordpress.js) to pull real posts from your WordPress install.</p>',
    featuredImage: {
      node: {
        sourceUrl:
          '/images/1544620347-c4fd4a3d5957.jpg',
        altText: 'Bulk air ticket booking',
      },
    },
    seo: null,
  },
  {
    id: '3',
    slug: 'southwest-group-travel-39-flights-booking-tips',
    title: 'Southwest Group Travel: Booking Tips for Large Parties',
    excerpt: 'What to check before booking a large group on Southwest\u2019s point-to-point network.',
    date: '2026-04-14',
    modified: '2026-04-14',
    content:
      '<p>This post is placeholder content. Connect WPGraphQL (see lib/wordpress.js) to pull real posts from your WordPress install.</p>',
    featuredImage: {
      node: {
        sourceUrl:
          '/images/1569154941061-e231b4725ef1.jpg',
        altText: 'Southwest Airlines aircraft',
      },
    },
    seo: null,
  },
];

export async function getAllPosts() {
  const data = await wpFetch(`
    query AllPosts {
      posts(first: 100, where: { status: PUBLISH }) {
        nodes { ${POST_FIELDS} }
      }
    }
  `);
  if (!data) return MOCK_POSTS;
  return data.posts.nodes;
}

export async function getPostSlugs() {
  const posts = await getAllPosts();
  return posts.map((p) => p.slug);
}

export async function getPostBySlug(slug) {
  const data = await wpFetch(
    `
      query PostBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) { ${POST_FIELDS} }
      }
    `,
    { slug }
  );
  if (!data) return MOCK_POSTS.find((p) => p.slug === slug) || null;
  return data.post;
}

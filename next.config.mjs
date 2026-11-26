/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async redirects() {
    return [
      // www -> non-www, same path
      {
        source: '/',
        has: [{ type: 'host', value: 'www.travelogroup.com' }],
        destination: 'https://travelogroup.com/',
        permanent: true,
      },
      // files (sitemap.xml, robots.txt, images…) keep no trailing slash
      {
        source: '/:file(.+\\.[a-zA-Z0-9]+)',
        has: [{ type: 'host', value: 'www.travelogroup.com' }],
        destination: 'https://travelogroup.com/:file',
        permanent: true,
      },
      {
        source: '/:path+',
        has: [{ type: 'host', value: 'www.travelogroup.com' }],
        destination: 'https://travelogroup.com/:path+/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

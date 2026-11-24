/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: process.env.WORDPRESS_HOSTNAME || 'airlinesgroupbookings.com' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.travelogroup.com' }],
        destination: 'https://travelogroup.com/',
        permanent: true,
      },
      
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

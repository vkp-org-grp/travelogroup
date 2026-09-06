/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: process.env.WORDPRESS_HOSTNAME || 'airlinesgroupbookings.com' },
    ],
  },
};

export default nextConfig;

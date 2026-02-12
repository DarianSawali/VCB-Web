/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/meet-our-pastors', destination: '/about', permanent: true },
      { source: '/vision-mission', destination: '/about', permanent: true },
      { source: '/statement-of-faith', destination: '/about', permanent: true },
      { source: '/pillars-of-ministry', destination: '/about', permanent: true },
      { source: '/join-us', destination: '/connect', permanent: true },
      { source: '/giving', destination: '/give', permanent: true },
    ]
  },
}

module.exports = nextConfig



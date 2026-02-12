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
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/statement-faith', destination: '/about', permanent: true },
      { source: '/pillars-ministry', destination: '/about', permanent: true },
      { source: '/join-us', destination: '/connect', permanent: true },
      { source: '/giving', destination: '/give', permanent: true },
    ]
  },
}

module.exports = nextConfig



/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.tobi.sh',
      },
    ],
  },
}

module.exports = nextConfig

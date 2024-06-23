/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jo-varo.github.io',
      },
    ],
  },
};

module.exports = nextConfig;

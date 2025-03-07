/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;

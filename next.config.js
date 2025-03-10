/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable webpack caching completely
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;

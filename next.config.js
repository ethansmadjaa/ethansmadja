/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'nluextmsrxuxcmwerxkc.supabase.co'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable webpack caching completely
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  // Ensure environment variables are properly loaded
  env: {
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['*']
  },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  }
}

module.exports = nextConfig 
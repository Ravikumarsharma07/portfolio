/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // ❌ remove or comment this out
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
  },
  transpilePackages: ['three'],
  eslint: {
    // Lint is run separately in CI; don't block production builds on it.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

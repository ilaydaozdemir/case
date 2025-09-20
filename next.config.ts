import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Netlify deployment optimizations
  output: 'standalone',
  trailingSlash: false,
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

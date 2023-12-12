/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;

/*

const nextConfig = {
  images: {
    domains: ['unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;




*/

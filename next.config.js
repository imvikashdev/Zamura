/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, 
  },
  images: {
    domains: ["yt3.ggpht.com", "randomuser.me", "lh3.googleusercontent.com"],
  },
  swcMinify: true,
};

module.exports = nextConfig;

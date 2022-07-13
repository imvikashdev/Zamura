/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["yt3.ggpht.com", "randomuser.me"],
  },
  swcMinify: true,
};

module.exports = nextConfig;

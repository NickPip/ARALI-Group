const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};





module.exports = nextConfig;

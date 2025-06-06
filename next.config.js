const { withPayload } = require("@payloadcms/next/withPayload");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    domains: [
      "localhost",
      "127.0.0.1",
      "img.youtube.com",
      "i.ytimg.com",
      "youtube.com",
      "www.youtube.com",
    ],
  },
};

module.exports = withPayload(nextConfig);

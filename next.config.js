/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-webhome.punyaasset.com",
      },
    ],
  },
};

module.exports = nextConfig;

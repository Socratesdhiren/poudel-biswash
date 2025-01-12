/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/submit",
        destination: "/api/submit", // Ensure no conflict
      },
    ];
  },
};

module.exports = nextConfig;

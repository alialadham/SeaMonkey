import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "seamonkeynetwork.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;

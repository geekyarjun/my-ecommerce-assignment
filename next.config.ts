import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // AVOIDED IN PRODUCTION APPLICATION. DID THIS ONLY FOR DEMO PURPOSES
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;

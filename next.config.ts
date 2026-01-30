import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  // Empty turbopack config to silence Next.js 16 warning
  turbopack: {},
};

export default nextConfig;


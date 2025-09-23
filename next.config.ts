import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ ADD THIS LINE - Ignores ESLint errors
  },
};

export default nextConfig;

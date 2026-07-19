import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Required for app/global-not-found.tsx — with two root layouts
    // (en/de route groups) there is no shared layout to compose a 404 from.
    globalNotFound: true,
  },
};

export default nextConfig;

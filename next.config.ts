import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/local-business-numbers", destination: "/local-business-number", permanent: true },
      { source: "/recording-consent", destination: "/recording-and-consent", permanent: true },
      { source: "/privacy-policy", destination: "/zoiko-local-privacy-policy", permanent: true },
      { source: "/get-a-local-number", destination: "/get-local-number", permanent: true },
      { source: "/plans-and-pricing", destination: "/pricing", permanent: true },
    ];
  },
};

export default nextConfig;

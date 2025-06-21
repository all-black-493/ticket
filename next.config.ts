import type { NextConfig } from "next";

const nextConfig = {
  redirects: async () => [
    {
      source: "/:tenant/logout",
      destination: "/:tenant/auth/logout",
      permanent: true
    },
  ],
};

export default nextConfig;

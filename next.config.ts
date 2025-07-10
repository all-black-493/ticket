import type { NextConfig } from "next";

const nextConfig = {
  redirects: async () => [
    {
      source: "/logout",
      destination: "/auth/logout",
      permanent: true
    },
  ],
};

export default nextConfig;

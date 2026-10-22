import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/products/:path*",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/work/:path*",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

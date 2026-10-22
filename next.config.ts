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
      {
        source: "/solutions/custom-ai",
        destination: "/solutions#custom-ai",
        permanent: true,
      },
      {
        source: "/solutions/ai-agents",
        destination: "/solutions#ai-agents",
        permanent: true,
      },
      {
        source: "/solutions/enterprise-software",
        destination: "/solutions#enterprise-software",
        permanent: true,
      },
      {
        source: "/solutions/web-mobile-platforms",
        destination: "/solutions#web-mobile-platforms",
        permanent: true,
      },
      {
        source: "/solutions/web-mobile",
        destination: "/solutions#web-mobile-platforms",
        permanent: true,
      },
      {
        source: "/solutions/:slug+",
        destination: "/solutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

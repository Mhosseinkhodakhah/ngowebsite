/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  transpilePackages: ["echarts", "zrender"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ngoupload.oceanjourney.ir",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "cdn.finatic.ir",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "ngoupload.fiantic.ir",
        port: "",
        search: "",
      },
    ],
  },

  async redirects() {
    return [
      // Wildcard path matching
      {
        source: "/[locale]/dashboard",
        destination: "/dashboard/projects",
        permanent: true,
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

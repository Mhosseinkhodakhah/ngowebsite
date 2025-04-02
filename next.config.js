/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.it",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "fakeimg.pl",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "ngoupload.oceanjourney.ir",
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

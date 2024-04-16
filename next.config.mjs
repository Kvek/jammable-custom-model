/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    buildActivityPosition: "bottom-right",
  },
  experimental: {
    typedRoutes: true,
  },
  generateBuildId: process.env.GIT_HASH,
  async redirects() {
    return [{ destination: "/my-voices", permanent: true, source: "/" }];
  },
};

export default nextConfig;

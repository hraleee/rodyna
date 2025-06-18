/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@keystone-6'],
    webpack: (config) => {
      config.externals = [...(config.externals || []), '.prisma/client'];
      return config;
    },
  }
  ;

export default nextConfig;

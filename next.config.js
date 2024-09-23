const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  output: 'export',
  images: {
    unoptimized: true, 
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' }, 
      '/about': { page: '/about' }, 
      '/services': { page: '/services' }, 
      '/cost-calculator': { page: '/cost-calculator' }, 
      '/gallery': { page: '/gallery' }, 
      '/contact': { page: '/contact' }, 
    };
  },
};

module.exports = nextConfig;

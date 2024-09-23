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
};

module.exports = nextConfig;

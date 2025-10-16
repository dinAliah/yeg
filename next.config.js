/** @type {import('next').NextConfig} 
module.exports = {
  output: 'export', // Enable static export mode
  
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};*/
/** @type {import('next').NextConfig} 
const nextConfig = {
    // Leave this empty for now. Next.js defaults are usually fine.
};

module.exports = nextConfig; */

const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // This configuration explicitly sets the root directory for output file tracing, 
    // resolving the "detected multiple lockfiles" warning you saw in the console.
    outputFileTracingRoot: path.resolve(__dirname, 'C:/Users/user/yeg'), 
};

module.exports = nextConfig;


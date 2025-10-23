const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export. Next will generate an `out/` directory when building.
  output: 'export',

  // For GitHub Pages we don't want Next.js image optimization to run.
  images: {
    unoptimized: true,
  },

  // Keep the explicit output tracing root when needed; use a portable value
  // (avoid absolute Windows paths which break Linux CI runners)
  outputFileTracingRoot: path.resolve(__dirname),
};

module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// module.exports = {
//   swcMinify: false, // Disables SWC minification
//   output: 'export', // Enables static export
//   images: {
//     unoptimized: true, // Required for static exports
//   },
// };



/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: false, // Disable SWC minification (optional)
  output: 'export', // Enable static export mode
  // basePath: '/yeg', 
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

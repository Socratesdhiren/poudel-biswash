/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures a static export
  basePath: "/poudel-biswash", // Use your repository name
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
};

module.exports = nextConfig;

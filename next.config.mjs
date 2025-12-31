/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <--- Forces Next.js to produce static HTML
  images: {
    unoptimized: true, // <--- Required for images to show on GitHub Pages
  },
  // This helps GitHub find your files. 
  // IMPORTANT: This must match your Repository Name exactly.
  basePath: "/happy-new-year-", 
};

export default nextConfig;

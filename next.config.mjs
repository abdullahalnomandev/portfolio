/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    domains: [
      'images.unsplash.com',
      'picsum.photos',
      'via.placeholder.com',
      'res.cloudinary.com',
      'imgur.com',
      'i.imgur.com',
      'media.giphy.com',
    ],
  },
};

export default nextConfig;

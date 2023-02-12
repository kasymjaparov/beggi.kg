/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: "build",
  images: {
    domains: ["167.71.238.139", "beggi.kg", "beggi-api.com"],
  },
}

module.exports = nextConfig

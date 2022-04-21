/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const env = {
  SERVER: process.env.SERVER
}
const images = {
  domains: ["res.cloudinary.com"]
}
module.exports = {nextConfig, env, images}

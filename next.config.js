/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const env = {
  SERVER: process.env.SERVER
}
module.exports = {nextConfig, env}

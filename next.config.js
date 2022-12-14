/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
})

module.exports = withNextra(nextConfig)

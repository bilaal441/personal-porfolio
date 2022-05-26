/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    })
    return config
  },

  images: {
    domains: [
      "repository-images.githubusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
 
}

module.exports = nextConfig

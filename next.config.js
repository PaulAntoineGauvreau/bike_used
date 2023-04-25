const path = require('node:path');


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
module.exports = nextConfig

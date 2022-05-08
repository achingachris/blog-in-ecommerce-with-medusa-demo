const withSourcebit = require('sourcebit').sourcebitNext()

module.exports = withSourcebit({})

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['medusa-public-images.s3.eu-west-1.amazonaws.com'],
  },
}

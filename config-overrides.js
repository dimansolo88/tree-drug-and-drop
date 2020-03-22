const path = require('path')

module.exports = function (config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
    },

  }
  return config
}

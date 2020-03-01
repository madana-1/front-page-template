const path = require('path')

const outputDir = process.env.NODE_ENV === 'development' ? 'dist' : 'template'

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '/src')
      }
    }
  },
  publicPath: './',
  outputDir
}

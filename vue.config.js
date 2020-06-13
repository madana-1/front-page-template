const join = require('path').join

const {
  NODE_ENV,
  npm_package_name: NPM_PACKAGE_NAME
} = process.env

const outputDir = NODE_ENV === 'development'
                   ? 'dist'
                   : `${NPM_PACKAGE_NAME.charAt(0).toUpperCase()}${NPM_PACKAGE_NAME.slice(1)}`

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': join(__dirname, 'src')
      }
    }
  },
  publicPath: './',
  outputDir
}

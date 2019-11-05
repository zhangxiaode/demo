const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  publicPath: './',
  assetsDir: './',
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    open: true,
    proxy: {
      '/apis': {
        target: 'http://192.168.0.215:8093',
        ws: false,
        changeOrigin: false
      }
    }
  }
}

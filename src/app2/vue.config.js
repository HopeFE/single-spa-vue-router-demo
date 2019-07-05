// const webpack = require('webpack')

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false,
  lintOnSave: true,
  chainWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('html').tap(options => {
        options[0].minify = {
          removeComments: false,
          collapseWhitespace: false,
          removeAttributeQuotes: false
        }
        return options
      })
    }
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
  },
  parallel: true,
  devServer: {
    open: true,
    host: '127.0.0.1',
    port: 8082,
    progress: true,
    inline: true,
    proxy: {
      '/': {
        target: 'https://hn.algolia.com/api/v1/',
        ws: false,
        changOrigin: true
      }
    }
  },
  css: {
    extract: false
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          city: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vuex-router-sync|vuex-router-sync|Element)[\\/]/,
            name: 'vue-common',
            chunks: 'all'
          }
        }
      }
    }
  }
}

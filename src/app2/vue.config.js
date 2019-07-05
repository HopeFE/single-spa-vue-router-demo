const webpack = require('webpack')

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },
  productionSourceMap: false,
  parallel: true,
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
  devServer: {
    proxy: {
      '/': {
        target: 'http://qa-fahuo.ymm56.com/personal-web/',
        ws: false,
        changeOrigin: true
      }
    }
  },
  lintOnSave: true,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
}

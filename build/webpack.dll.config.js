var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['axios', 'lodash']
  },
  output: {
    path: path.join(__dirname, '../public/dll'),
    filename: '[name].dll.js',
    library: '[name]_library'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../public/dll', '[name]-manifest.json'),
      name: '[name]_library'
    })
  ]
}

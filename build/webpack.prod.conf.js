const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const packages = require('./get-packages')()
const config = require('./config')

module.exports = {
  mode: 'production',
  entry: packages,
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: './',
    filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: config.extensions,
    alias: config.alias
  },
  externals: config.externals,
  performance: false,
  optimization: {
    minimize: true
  },
  module: {
    rules: config.rules
  },
  plugins: [new VueLoaderPlugin(), new ProgressBarPlugin()]
}

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('./config')

module.exports = {
  mode: 'production',
  entry: {
    'unique-docs': './examples/index_docs.js',
    'unique-mobile': './examples/index_mobile.js'
  },
  output: {
    path: path.resolve(__dirname, '../examples/dist'),
    publicPath: './',
    chunkFilename: 'chunk_[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: config.extensions,
    alias: config.alias
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          priority: 10
        }
      }
    }
  },
  module: {
    rules: config.rules
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'unique-docs'],
      template: './examples/index.html',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'unique-mobile'],
      template: './examples/index.html',
      filename: 'mobile.html',
      inject: true
    }),
    new CleanWebpackPlugin(['./examples/dist'], {
      root: path.resolve(__dirname, '../')
    }),
    new VueLoaderPlugin(),
    new ProgressBarPlugin()
  ]
}

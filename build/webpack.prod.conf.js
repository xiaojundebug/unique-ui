const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'production',
  entry: {
    unique: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: './',
    filename: '[name].min.js',
    library: 'unique',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      packages: path.resolve(__dirname, '../packages')
    }
  },
  externals: [/^normalize\.css$/, /^font-awesome/],
  performance: false,
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}

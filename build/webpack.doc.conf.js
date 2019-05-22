const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('./config')
const hljs = require('highlight.js')

module.exports = {
  mode: 'production',
  entry: {
    'unique-docs': './examples/index_docs.js',
    'unique-mobile': './examples/index_mobile.js'
  },
  output: {
    path: path.resolve(__dirname, '../examples/dist'),
    publicPath: './'
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
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader'
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          {
            loader: 'markdown-to-vue-loader',
            options: {
              languages: [],
              preClass: 'hljs', // 代码高亮所必须的类名
              markdownItOptions: {
                highlight(str, lang) {
                  if (lang && hljs.getLanguage(lang)) {
                    try {
                      return hljs.highlight(lang, str).value
                    } catch (__) {}
                  }

                  return ''
                }
              }
            }
          }
        ]
      }
    ]
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

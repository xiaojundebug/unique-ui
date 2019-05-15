const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const hljs = require('highlight.js')

module.exports = {
  mode: 'development',
  // 配置多入口，一个是文档，一个是demo
  entry: {
    'unique-docs': './examples/index_docs.js',
    'unique-mobile': './examples/index_mobile.js'
  },
  output: {
    path: path.resolve(__dirname, '../examples/dist'),
    publicPath: '/',
    chunkFilename: 'chunk_[name].js',
    libraryTarget: 'umd'
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.vue', '.md'], // 引入模块时可以省略的扩展名
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      src: path.resolve(__dirname, '../src'),
      examples: path.resolve(__dirname, '../examples'),
      docs: path.resolve(__dirname, '../examples/docs'),
      packages: path.resolve(__dirname, '../packages')
    }
  },
  // externals: [/^normalize\.css$/, /^font-awesome/],
  // webpack-dev-server
  devServer: {
    contentBase: path.resolve(__dirname, '../examples/dist'),
    clientLogLevel: 'warning',
    compress: true,
    port: 3000,
    host: '0.0.0.0', // 这里设置0.0.0.0是为了能通过ip访问
    open: false,
    quiet: true // 禁止打印编译信息，使用friendly-errors-webpack-plugin所必须的设置
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'fast-css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'fast-css-loader', 'postcss-loader', 'fast-sass-loader']
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
                // 设置代码高亮
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
      chunks: ['unique-docs'],
      template: './examples/index.html',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({
      chunks: ['unique-mobile'],
      template: './examples/index.html',
      filename: 'mobile.html',
      inject: true
    }),
    new FriendlyErrorsWebpackPlugin({
      // 每次编译成功后会打印这些设置的信息
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:3000'],
        clearConsole: true
      }
    }),
    // vue-loader v15版本以后所需
    new VueLoaderPlugin()
  ]
}

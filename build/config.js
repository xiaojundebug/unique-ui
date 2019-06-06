const path = require('path')
const nodeExternals = require('webpack-node-externals')
const hljs = require('highlight.js')
const packages = require('./get-packages')()

const externals = {}

Object.keys(packages).forEach(function(key) {
  externals[`unique-ui/packages/${key}`] = `unique-ui/lib/${key}`
})

module.exports = {
  alias: {
    vue$: 'vue/dist/vue.esm.js',
    src: path.resolve(__dirname, '../src'),
    examples: path.resolve(__dirname, '../examples'),
    docs: path.resolve(__dirname, '../docs'),
    packages: path.resolve(__dirname, '../packages'),
    'unique-ui': path.resolve(__dirname, '../')
  },
  extensions: ['.js', '.vue', '.md'],
  externals: [
    Object.assign(
      {
        vue: 'vue'
      },
      externals
    ),
    nodeExternals()
  ],
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
}

const path = require('path')
const nodeExternals = require('webpack-node-externals')
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
    docs: path.resolve(__dirname, '../examples/docs'),
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
  ]
}

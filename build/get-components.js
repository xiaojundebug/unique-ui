const fs = require('fs')
const path = require('path')

const excludes = ['mixins', 'utils', 'theme']

module.exports = function() {
  let dirs = fs.readdirSync(path.resolve(__dirname, '../packages'))
  dirs = dirs.filter(dirName => excludes.indexOf(dirName) === -1)

  const result = {}

  for (const key of dirs) {
    result[key] = `./packages/${key}`
  }
  return result
}

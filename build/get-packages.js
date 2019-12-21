const fs = require('fs-extra')
const path = require('path')

const excludes = ['theme']

module.exports = function() {
  let dirs = fs.readdirSync(path.resolve(__dirname, '../packages'))
  dirs = dirs.filter(dirName => excludes.indexOf(dirName) === -1)

  const result = {}

  for (const key of dirs) {
    result[key] = `./packages/${key}`
  }
  return result
}

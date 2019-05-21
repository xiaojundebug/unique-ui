const fs = require('fs-extra')
const path = require('path')

let content = fs.readFileSync(path.join(__dirname, '../src/index.js'), 'utf-8')
content = content.replace(/packages/g, '.')

fs.outputFileSync(path.join(__dirname, '../lib/index.js'), content)

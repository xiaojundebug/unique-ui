/* 构建统一入口文件 */
const fs = require('fs-extra')
const path = require('path')

let content = fs.readFileSync(path.resolve(__dirname, '../src/index.js'), 'utf-8')
content = content.replace(/packages/g, '.')

fs.outputFileSync(path.resolve(__dirname, '../lib/index.js'), content)

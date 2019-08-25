// 测试css兼容性
function featureTest(property, value, noPrefixes) {
  var prop = property + ':'

  var el = document.createElement('test')

  var mStyle = el.style

  if (!noPrefixes) {
    mStyle.cssText =
      prop + ['-webkit-', '-moz-', '-ms-', '-o-', ''].join(value + ';' + prop) + value + ';'
  } else {
    mStyle.cssText = prop + value
  }
  return mStyle[property].indexOf(value) !== -1
}

export { featureTest }
export * from './event'
export * from './shared'

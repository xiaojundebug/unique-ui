/**
 * 日期格式化
 * @param {Date} date 日期实例
 * @param {String} [fmt = 'yyyy-MM-dd hh:mm:ss'] 格式，默认为 'yyyy-MM-dd hh:mm:ss'
 */
function dateFormat(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}
/**
 * 数字前补 0
 * @param {Number} num 被修饰数字
 * @param {Number} [n = 2] 修饰成多少位，默认 2 位
 */
function prefixInteger(num, n = 2) {
  return (Array(n).join(0) + num).slice(-n)
}

export { dateFormat, prefixInteger }

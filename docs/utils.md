## 实用代码

`unique-ui`中集成了一些常用工具代码

#### 1px 方案

基于伪类 + transform 实现，提供了以下几个内置类名

- 上边`i-1px--t`
- 右边`i-1px--r`
- 下边`i-1px--b`
- 左边`i-1px--l`
- 全部`i-1px`

#### 单行省略

提供了内置类名`ellipsis`

#### 日期格式化

> dateFormat(date[, fmt = 'yyyy-MM-dd hh:mm:ss'])
>
> - date\<Date\>: Date 实例
> - fmt\<String\>: 格式，默认为 'yyyy-MM-dd hh:mm:ss'

```javascript
import { utils: { dateFormat } } from 'unique'
// 常规用法
dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')
// 只保留年月日部分
dateFormat(new Date(), 'yyyy-MM-dd')
// 只保留时间部分
dateFormat(new Date(), 'hh:mm:ss')
// 随意组合
dateFormat(new Date(), 'yyyy-MM-dd 00:00:00')
```

#### 数字前补 0

> prefixInteger(num[, n = 2])
>
> - num\<Number\>: 被修饰数字
> - n\<Number\>: 修饰成多少位，默认 2 位

```javascript
import { utils: { prefixInteger } } from 'unique'
prefixInteger(9, 2) // 09
prefixInteger(15, 3) // 015
```

#### 防抖

> debounce(fn, delay)
>
> - fn\<Function\>: 被装饰方法
> - delay\<Number\>: 间隔多少毫秒

```javascript
import { utils: { debounce } } from 'unique'
const search = debounce(function() {
  // ...
}, 300)
```

#### 节流

> throttle(fn, delay[, cb])
>
> - fn\<Function\>: 被装饰方法
> - delay\<Number\>: 间隔多少毫秒
> - cb\<Function\>: 节流发挥作用时触发

```javascript
import { utils: { throttle } } from 'unique'
const query = throttle(
  function() {
    // ...
  },
  1000,
  function() {
    console.log('请求次数过于频繁')
  }
)
```

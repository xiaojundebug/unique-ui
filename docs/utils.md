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

* 参数一：Date 实例
* 参数二：格式，默认为`yyyy-MM-dd hh:mm:ss`

```javascript
import { utils } from 'unique'
const { dateFormat } = utils
// 常规用法
dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss')
// 只保留年月日部分
dateFormat(new Date(), 'yyyy-MM-dd')
// 只保留时间部分
dateFormat(new Date(), 'hh:mm:ss')
// 随意组合
dateFormat(new Date(), 'yyyy-MM-dd 00:00:00')
```
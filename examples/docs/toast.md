## Toast 消息提示

> 推荐用`Vue.use`方式来使用本组件，以后便可以在每个Vue实例上直接通过`this.$toast`方式使用，第一个参数代表消息内容，第二个参数传入一个options配置对象，仅支持单例模式

#### 使用方法

```javascript
/* 普通提示 */
this.$toast('hello~')

/* 加载提示 */
this.$toast('Loading...', { type: 'loading', duration: 3000 })
this.$toast.loading('Loading...', { duration: 3000 })

/* 成功提示 */
this.$toast('成功', { type: 'success' })
this.$toast.success('成功')

/* 失败提示 */
this.$toast('失败', { type: 'fail' })
this.$toast.fail('失败')
```

#### Options（第二个参数）

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 类型，可选值为`normal | loading | success | fail` | `String` | `'normal'` |
| duration | 多久自动消失，`0`代表不消失，单位毫秒 | `Number` | 当`type`为`loading`时默认是`0`，其它为`2500` |
| overlay | 是否显示一个透明度为`0`的蒙版，防止用户点击其它地方，只在`type`不为`normal`时生效 | `Boolean` | `true` |

#### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| show | 是否显示 | `Boolean` | `false` |
| type | 同Options中一致 | `String` | `normal` |
| text | 文字内容 | `String` | `''` |
| overlay | 是否显示一个透明度为`0`的蒙版，不同于Options中，这里所有`type`下都会生效 | `Boolean` | `true` |


#### Slots

| 参数 | 说明 |
|------|------|
| icon | 图标 |
| text | 文字 |

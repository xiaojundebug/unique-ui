## Actionsheet 上拉菜单

#### 简单用法

需要传入一个`actions`数组，数组的每一项是一个对象，对象属性见文档下方表格。

```html
<i-actionsheet v-model="show" :actions="actions" @select="onSelect" close-on-click-overlay></i-actionsheet>
```

```javascript
export default {
  data() {
    return {
      show: false,
      actions: [{ name: '唱' }, { name: '跳' }, { name: 'rap' }, { name: '篮球', disabled: true }],
    }
  },
  methods: {
    onSelect(data) {
      this.$toast(data)
    }
  }
}
```

#### 显示取消按钮

传入`cancel-text`以显示底部按钮


```html
<i-actionsheet v-model="show" :actions="actions" cancel-text="取消" ></i-actionsheet>
```

#### 自定义样式

```html
<i-actionsheet v-model="show" :actions="actions" cancel-text="关闭" >
  <template slot="header">
    <span style="font-size:16px;margin:15px 0">确定吗？</span>
    <span style="font-size:13px;margin-bottom:15px;color:#999">删除之后就无法取消了哦</span>
  </template>
</i-actionsheet>
```

```javascript
export default {
  data() {
    return {
      show: false,
      actions: [{ name: '删除', className: 'danger' }],
    }
  }
}
```

```scss
.danger {
  color: #f86f74;
}
```

#### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| show | 是否显示 | `Boolean` | `false` |
| actions | 选项，请参考下方详情 | `Array` | `[]` |
| cancel-text | 取消按钮文字 | `String` | `''` |
| close-on-click-overlay | 点击蒙版时是否自动关闭 | `Boolean` | `false` |

#### Actions

| 参数 | 说明 |
|------|------|
| name | 选项内容 |
| disabled | 禁用该项 |
| className | 设置额外class |

#### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| select | 选中时触发 | 该项对应数据 |
| cancel | 取消时触发 | - |
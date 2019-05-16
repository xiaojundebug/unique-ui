## Modal 弹窗

> 推荐用`Vue.use`方式来使用本组件，以后便可以在每个Vue实例上直接通过`this.$modal`方式使用，第一个参数代表消息内容，第二个参数传入一个options配置对象，仅支持单例模式

#### 使用方法

```javascript
/* Alert */
this.$modal('Are you ok?', { type: 'alert', title: '👽' })
this.$modal.alert('Are you ok?', { title: '👽' })

/* Confirm */
this.$modal('大郎，起来喝药了', { type: 'confirm', title: '提示' })
this.$modal.confirm('大郎，起来喝药了', { title: '提示' })
```

#### 异步关闭

```javascript
// 要想使用异步关闭，autoClose一定要传false
this.$modal.alert('异步关闭', { title: '提示', autoClose: false }).then(close => {
  setTimeout(() => {
    close()
  }, 1000)
})
```

#### 组件调用

```html
<i-modal v-model="show" closeOnClickOverlay confirmText="CLOSE" transition-name="modal" style="width:66%">
  <img src="https://xiaojun1994.top/images/avatar.jpg" alt="avatar" style="display:block;width:100%">
</i-modal>
```

```scss
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.45s, transform 0.45s cubic-bezier(0.785, 0.135, 0.15, 0.86);
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: translate3d(-50%, 100%, 0) scale(0) skew(45deg, 45deg);
}
```

#### Options（第二个参数）

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 类型，可选值为`alert | confirm` | `String` | `'alert'` |
| title | 标题 | `String` | `` |
| confirmText | 确定按钮文字 | `String` | `确认` |
| cancelText | 取消按钮文字 | `String` | `取消` |
| closeOnClickOverlay | 点击蒙版时是否关闭弹窗	 | `Boolean` | `false` |
| autoClose | 点击按钮时自动关闭，要想实现异步关闭功能，请设为`false`	 | `Boolean` | `true` |
| transitionName | 同`Popup组件`中一致	 | `String` | `''` |

#### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| show | 是否显示，`v-model`是`v-bind:show`与`v-on:toggle`的简写方式 | `Boolean` | `false` |
| type | 同Options中一致 | `String` | `normal` |
| title | 同Options中一致 | `String` | `''` |
| text | 文字内容 | `String` | `''` |
| overlay | 是否显示蒙版 | `Boolean` | `true` |
| confirmText | 同Options中一致 | `String` | `确认` |
| cancelText | 同Options中一致 | `String` | `取消` |
| closeOnClickOverlay | 同Options中一致	 | `Boolean` | `false` |
| transitionName | 同`Popup组件`中一致	 | `String` | `''` |


#### Slots

| 参数 | 说明 |
|------|------|
| default | 弹窗主内容区域 |
| title | 标题区域 |
| footer | 底部区域 |

#### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| confirmText | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮或蒙版时触发 | - |
| toggle | 每次切换显示状态都会触发，`v-model`是`v-bind:show`与`v-on:toggle`的简写方式 | - |


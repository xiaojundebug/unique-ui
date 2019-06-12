## Popup 弹出层

> `Popup` 组件在整个组件库中是一个十分重要的基本组件，很多弹出类组件都依赖于它

#### 位置

通过`position`属性来设置弹层出现位置

```html
<i-popup :show="show" @click-overlay="show = false" position="center">
  <div class="popup-demo-content" style="height:200px">中</div>
</i-popup>
<i-popup :show="show" @click-overlay="show = false" position="top">
  <div class="popup-demo-content" style="height:100px">上</div>
</i-popup>
<i-popup :show="show" @click-overlay="show = false" position="right">
  <div class="popup-demo-content" style="width:70vw">右</div>
</i-popup>
<i-popup :show="show" @click-overlay="show = false" position="bottom">
  <div class="popup-demo-content" style="height:50vh">下</div>
</i-popup>
<i-popup :show="show" @click-overlay="show = false" position="left">
  <div class="popup-demo-content" style="width:70vw">左</div>
</i-popup>
```

#### 自定义样式

```html
<i-popup :show="show" @click-overlay="show = false" position="center" transition-name="fade" :overlay-opacity="0.85" overlay-color="#fff">
  <div class="popup-demo-content" style="height:200px"></div>
</i-popup>
```

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0);
}
```

#### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| show | 是否显示 | `Boolean` | `false` |
| position | 位置，可选值为`center` `top` `right` `bottom` `left` | `String` | `center` |
| overlay | 是否显示蒙版 | `Boolean` | `true` |
| overlay-opacity | 蒙版透明度 | `Number` | `0.5` |
| overlay-color | 蒙版颜色 | `String` | `#000` |
| transition-name | 同 vue 中`transition`的`name`属性 | `String` | 取决于`position` |

#### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| click-overlay | 点击蒙版时触发 | - |

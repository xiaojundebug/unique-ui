## Popup 弹出层

> `Popup` 组件在整个组件库中是一个十分重要的基本组件，很多弹出类组件都依赖于它

### 代码演示

```javascript
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    }
  }
}
```

#### 位置

通过`position`属性来设置弹层出现位置

```html
<i-popup :show="show1" @clickOverlay="show1 = false" position="center">
  <div class="popup-demo-content" style="height:200px">中</div>
</i-popup>
<i-popup :show="show2" @clickOverlay="show2 = false" position="top">
  <div class="popup-demo-content" style="height:100px">上</div>
</i-popup>
<i-popup :show="show3" @clickOverlay="show3 = false" position="right">
  <div class="popup-demo-content" style="width:50vw">右</div>
</i-popup>
<i-popup :show="show4" @clickOverlay="show4 = false" position="bottom">
  <div class="popup-demo-content" style="height:50vh">下</div>
</i-popup>
```

#### 样式设置

```html
<i-popup :show="show6" @clickOverlay="show6 = false" position="center" transition-name="zoomInUp" :overlayOpacity="0.85" overlayColor="#fff">
  <div class="popup-demo-content" style="height:200px"></div>
</i-popup>
```

```css
.zoomInUp-enter-active,
.zoomInUp-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.zoomInUp-enter {
  opacity: 0;
  transform: translate3d(-50%, 100%, 0) scale(0);
}
.zoomInUp-leave-to {
  opacity: 0;
  transform: translate3d(-50%, 100%, 0) scale(0);
}
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| show | 弹层是否显示 | `Boolean` | `false` |
| position | 位置，可选值为`center | top | right | bottom | left` | `String` | `center` |
| overlay | 是否显示蒙版 | `Boolean` | `true` |
| overlayOpacity | 蒙版透明度 | `Number` | `0.5` |
| overlayColor | 蒙版颜色 | `String` | `#000` |
| transitionName | 同`vue`中`transition`的`name`属性，仅作用于弹层部分 | `String` | 取决于`position` |

### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| clickOverlay | 点击蒙版时触发 | - |

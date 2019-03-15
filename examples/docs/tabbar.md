## Tabbar 标签栏

### 代码演示

#### 简单用法

```html
<i-tabbar v-model="active1" :fixed="false">
  <i-tabbar-item icon="shopping-cart" label="购物车" value="/shopping-cart" dot></i-tabbar-item>
  <i-tabbar-item icon="star" label="收藏" value="/star"></i-tabbar-item>
  <i-tabbar-item icon="share-alt" label="分享" value="/share"></i-tabbar-item>
</i-tabbar>
```

```javascript
export default {
  data() {
    return {
      active1: '/shopping-cart'
    }
  }
}
```

#### 自定义颜色

```html
<i-tabbar v-model="active2" :fixed="false" color="#666" active-color="#ff7e4a">
  <i-tabbar-item icon="shopping-cart" label="购物车" value="/shopping-cart"></i-tabbar-item>
  <i-tabbar-item icon="star" label="收藏" value="/star"></i-tabbar-item>
  <i-tabbar-item icon="share-alt" label="分享" value="/share"></i-tabbar-item>
</i-tabbar>
```

```javascript
export default {
  data() {
    return {
      active2: '/star'
    }
  }
}
```

#### 高级用法

通过插槽定制内容

```html
<i-tabbar v-model="active3" :fixed="false" color="#282212" active-color="#f7c635">
  <i-tabbar-item label="购物车" value="/shopping-cart">
    <img slot="icon" slot-scope="props" :src="props.active ? 'https://s1.ax2x.com/2018/11/02/5mFinO.png' : 'https://s1.ax2x.com/2018/11/02/5mF2Qq.png'">
  </i-tabbar-item>
  <i-tabbar-item label="收藏" value="/star">
    <img slot="icon" slot-scope="props" :src="props.active ? 'https://s1.ax2x.com/2018/11/02/5mFoZr.png' : 'https://s1.ax2x.com/2018/11/02/5mF7ce.png'">
  </i-tabbar-item>
  <i-tabbar-item label="分享" value="/share">
    <img slot="icon" slot-scope="props" :src="props.active ? 'https://s1.ax2x.com/2018/11/02/5mFRid.png' : 'https://s1.ax2x.com/2018/11/02/5mFnXR.png'">
  </i-tabbar-item>
</i-tabbar>
```

```javascript
export default {
  data() {
    return {
      active3: '/share'
    }
  }
}
```

### Tabbar Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| value | 选中某项，传入值为该项`value` | `String` | `''` |
| color | 未激活文字的颜色 | `String` | `#a9b1b9` |
| active-color | 已激活文字的颜色 | `String` | 主题色 |
| fixed | 是否固定在底部 | `Boolean` | `true` |

### TabbarItem Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| label | 标签文字 | `String` | `''` |
| value | 唯一标识 | `String` | `''` |
| icon | 图标 | `String` | `''` |
| dot | 是否显示图标右上角小红点 | `Boolean` | `''` |

### TabbarItem Slots

| 名称 | 说明 | slot-scope |
|------|------|------|
| icon | 自定义图标 | active: 是否为选中标签 |

### Tabbar Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 切换标签时触发 | 当前选中标签的value |
## Slide 轮播图

### 代码演示

```scss
// 示例样式
.i-slide-item {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  color: #fff;
  &:nth-child(odd) {
    background-color: #787e8f;
  }
  &:nth-child(even) {
    background-color: #9398a6;
  }
}
```

#### 简单用法

```html
<i-slide style="height: 200px;">
  <i-slide-item>1</i-slide-item>
  <i-slide-item>2</i-slide-item>
  <i-slide-item>3</i-slide-item>
  <i-slide-item>4</i-slide-item>
</i-slide>
```

#### 自定义指示器

```html
<i-slide style="height: 200px;">
  <i-slide-item>1</i-slide-item>
  <i-slide-item>2</i-slide-item>
  <i-slide-item>3</i-slide-item>
  <i-slide-item>4</i-slide-item>
  <div slot="indicator" slot-scope="props" style="position: absolute; bottom: 10px; right: 10px; padding: 2px 6px; background: rgba(0, 0, 0, .2); color: #fff;">
    {{ props.active + 1 }} / 4
  </div>
</i-slide>
```

### Slide Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| loop | 是否可以无缝循环轮播 | `Boolean` | `true` |
| autoplay | 自动轮播毫秒数，`0`代表不自动轮播 | `Number` | `3000` |
| duration | 动画时长，单位毫秒 | `Number` | `500` |
| initial-slide | 初始位置索引值 | `Number` | `0` |

### Slide Slots

| 名称 | 说明 | slot-scope |
|------|------|------|
| indicator | 自定义指示器 | active: 当前索引 |

### Slide Methods

| 方法名 | 参数 | 返回值 | 介绍 |
|------|------|------|------|
| slideTo | 索引 | - | 切换到指定位置 |

### Slide Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 滑动完成后触发 | 当前索引 |

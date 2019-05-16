## NavBar 导航栏

#### 简单用法

```html
<i-nav-bar title="标题" left-text="返回" left-arrow></i-nav-bar>
```

#### 高级用法

通过插槽定制内容

```html
<i-nav-bar title="标题">
  <i-icon name="search" style="fontSize: 16px; marginLeft: 10px" slot="left"></i-icon>
  <span slot="title">标题</span>
  <img src="data:image/png;base64,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" alt="right-icon" style="height: 20px; marginRight: 13px" slot="right">
</i-nav-bar>
```

#### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 标题 | `String` | `''` |
| left-arrow | 是否显示左侧箭头 | `Boolean` | `false` |
| left-text | 左侧文案 | `String` | `''` |
| fixed | 是否固定在顶部 | `Boolean` | `false` |

#### Slots

| 名称 | 说明 |
|------|------|
| title | 自定义标题 |
| left | 自定义左侧区域内容 |
| right | 自定义右侧区域内容 |

#### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| click-left | 点击左侧按钮时触发 | 原生事件对象 |
| click-right | 点击右侧按钮时触发 | 原生事件对象 |
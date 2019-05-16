## Tag 标记

#### 简单用法

```html
<i-tag type="primary">标签</i-tag>
<i-tag type="info">标签</i-tag>
<i-tag type="warning">标签</i-tag>
<i-tag type="success">标签</i-tag>
<i-tag type="danger">标签</i-tag>
```

#### 圆角样式

```html
<i-tag type="primary" round>标签</i-tag>
<i-tag type="info" round>标签</i-tag>
<i-tag type="warning" round>标签</i-tag>
<i-tag type="success" round>标签</i-tag>
<i-tag type="danger" round>标签</i-tag>
```

#### 空心样式

```html
<i-tag type="primary" plain round>标签</i-tag>
<i-tag type="info" plain>标签</i-tag>
<i-tag type="warning" plain round>标签</i-tag>
<i-tag type="success" plain>标签</i-tag>
<i-tag type="danger" plain round>标签</i-tag>
```

#### 自定义颜色

```html
<i-tag color="#f2826a">标签</i-tag>
<i-tag color="#26c6f4" plain>标签</i-tag>
<i-tag color="#45c78d" round>标签</i-tag>
<i-tag color="#a48cef" round plain>标签</i-tag>
```

#### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 类型，可选值为`primary` `info` `warning` `success` `danger` | `String` | `primary` |
| color | 自定义标签颜色 | `String` | `''` |
| plain | 是否为空心样式 | `Boolean` | `false` |
| round | 是否为圆角样式 | `Boolean` | `false` |

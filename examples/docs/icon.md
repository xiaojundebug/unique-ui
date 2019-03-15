## Icon 图标

> 图标资源来自于[Font Awesome 4.7.0](https://fontawesome.com/v4.7.0/)，兼容官方写法，如果你只是想简单使用某个图标，可以使用这里提供的`Icon`组件，也许能省下一些你写类名的时间

### 代码演示

#### 简单用法

```html
<i-icon name="home"></i-icon>
```

#### 自定义大小

```html
<i-icon name="home" size="16px"></i-icon>
<i-icon name="home" size="32px"></i-icon>
<i-icon name="home" size="48px"></i-icon>
```

#### 自定义颜色

```html
<i-icon name="home" color="#49b683"></i-icon>
<i-icon name="home" color="#ab97c3"></i-icon>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| name | 图标名称 | `String` | `''` |
| size | 图标大小 | `String` | `'inherit'` |
| color | 图标颜色 | `String` | `'inherit'` |

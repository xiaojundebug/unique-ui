## Loading 加载

### 代码演示

#### 简单用法

```html
<i-loading type="ios"></i-loading>
<i-loading type="dots"></i-loading>
<i-loading type="ripple"></i-loading>
<i-loading type="lines"></i-loading>
<i-loading type="crescent"></i-loading>
```

#### 设置大小

```html
<i-loading type="ios" size="15px"></i-loading>
<i-loading type="dots" size="25px"></i-loading>
<i-loading type="ripple" size="35px"></i-loading>
<i-loading type="lines" size="45px"></i-loading>
<i-loading type="crescent" size="55px"></i-loading>
```

#### 自定义颜色

```html
<i-loading type="ios" color="#f86f74"></i-loading>
<i-loading type="dots" color="#a48cef"></i-loading>
<i-loading type="ripple" color="#33cd5f"></i-loading>
<i-loading type="lines" color="#387ef5"></i-loading>
<i-loading type="crescent" color="#26c6f4"></i-loading>
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 类型，可选值为`ios` `dots` `ripple` `lines` `crescent` | `String` | `ios` |
| size | 大小 | `String` | `30px` |
| color | 颜色 | `String` | 主题色 |

## Button 按钮

#### 按钮类型

支持`default` `primary` `info` `danger` `warning`五种类型，默认为`default`

```html
<i-button type="default">默认按钮</i-button>
<i-button type="primary">主要按钮</i-button>
<i-button type="info">信息按钮</i-button>
<i-button type="danger">危险按钮</i-button>
<i-button type="warning">警告按钮</i-button>
```

#### 空心按钮

```html
<i-button type="primary" plain>空心按钮</i-button>
<i-button type="danger" plain>空心按钮</i-button>
```

#### 虚线按钮

```html
<i-button type="primary" dashed>虚线按钮</i-button>
<i-button type="danger" dashed>虚线按钮</i-button>
```

#### 圆形按钮

```html 
<i-button type="primary" circle><i-icon name="search" /></i-button>
<i-button type="danger" circle><i-icon name="search" /></i-button>
```

#### 圆角按钮

```html 
<i-button type="primary" round>圆角按钮</i-button>
<i-button type="danger" round>圆角按钮</i-button>
```

#### 按钮状态

```html 
<i-button type="primary" disabled>禁用状态</i-button>
<i-button type="danger" loading>加载状态</i-button>
```

#### 自定义颜色

```html 
<i-button color="steelblue">自定义颜色</i-button>
<i-button color="whitesmoke" text-color="rosybrown" round>自定义颜色</i-button>
<i-button color="thistle" dashed circle><i-icon name="heart-o" /></i-button>
```

#### 按钮尺寸

```html 
<i-button type="default" size="large">大号按钮</i-button>
<i-button type="default" size="normal">正常按钮</i-button>
<i-button type="default" size="small">小型按钮</i-button>
<i-button type="default" size="mini">迷你按钮</i-button>
```

#### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 类型，可选值为 `default` `primary`<br />`info` `danger` `warning` | `String` | `default` |
| plain | 是否为空心按钮 | `Boolean` | `false` |
| dashed | 是否为虚线按钮 | `Boolean` | `false` |
| circle | 是否为圆形按钮 | `Boolean` | `false` |
| round | 是否为圆角按钮 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| loading | 是否为 loading 状态 | `Boolean` | `false` |
| size | 尺寸，可选值为 `normal` `large` `small` `mini` | `String` | `normal` |
| color | 按钮颜色 | `String` | `''` |
| text-color | 按钮字体颜色 | `String` | 1、未设置`color`情况下为`''`<br />2、否则为`color`或`#fff`<br />_取决于`plain` `dashed`_ |

#### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击按钮且按钮状态不为加载或禁用时触发 | 原生事件对象 |

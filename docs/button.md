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
<i-button type="info" plain>空心按钮</i-button>
<i-button type="danger" plain>空心按钮</i-button>
```

#### 虚线按钮

```html
<i-button type="info" dashed>虚线按钮</i-button>
<i-button type="danger" dashed>虚线按钮</i-button>
```

#### 圆形按钮

```html 
<i-button type="default" circle><i-icon name="search"/></i-button>
<i-button type="info" circle plain><i-icon name="search"/></i-button>
<i-button type="danger" circle dashed><i-icon name="search"/></i-button>
```

#### 圆角按钮

```html 
<i-button type="default" round>圆角按钮</i-button>
```

#### 禁用状态

```html 
<i-button type="danger" disabled>禁用状态</i-button>
```

#### Loading状态

```html 
<i-button type="info" loading>提交</i-button>
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
| type | 类型，可选值为 `default` `primary` `info` `danger` `warning` | `String` | `default` |
| plain | 是否为空心按钮，`default`类型不适用 | `Boolean` | `false` |
| dashed | 是否为虚线按钮，`default`类型不适用 | `Boolean` | `false` |
| circle | 是否为圆形按钮 | `Boolean` | `false` |
| round | 是否为圆角按钮 | `Boolean` | `false` |
| disabled | 是否禁用 | `Boolean` | `false` |
| loading | 是否为 loading 状态 | `Boolean` | `false` |
| size | 尺寸，可选值为 `normal` `large` `small` `mini` | `String` | `normal` |

#### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击按钮且按钮状态不为加载或禁用时触发 | 原生事件对象 |
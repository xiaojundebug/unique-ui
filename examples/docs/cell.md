## Cell 单元格

### 代码演示

#### 简单用法

```html
<i-cell-group>
  <i-cell title="积分" desc="描述信息" value="10"></i-cell>
  <i-cell title="账户余额" value="0.00 元"></i-cell>
</i-cell-group>
```

#### 显示箭头

使用`is-link`属性可以显示右侧箭头，并且开启点击反馈，当设置了`to`属性以后，`is-link`默认会启用

```html
<i-cell-group>
  <i-cell icon="language" title="Language" value="english" is-link></i-cell>
</i-cell-group>
```

#### 高级用法

使用插槽定制内容

```html
<i-cell-group>
  <i-cell :to="{ path: '/' }">
    <img slot="icon" src="data:image/png;base64,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" alt="left-icon">
    <span slot="title" style="color: #7f7f7f;">消息</span>
    <i-tag slot="value" type="danger" round style="height: 20px;">62</i-tag>
    <img slot="right-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADQ0lEQVR4Xu2Yz2sTQRTH3xvSgDlIBRUVQaQ0Fw/exItYFdFKFbwo2CKt3d22l+pBb+I/oKAgWHZmQ6BBUBcVBUXEH8FeROlBxUsRBBU8FG1OhjU/ngxuyjYkUthNZnEnt7Cz+977vO/3zewiJPyHCa8fNACtgIQT0BZIuAD0ENQW0BZIOAFtgYQLQO8C2gLaAgknoC2QcAHoXUC5BQzD2M4YO1KpVB7m8/mv3VakcgCWZS0CwHoiKhHRMcdx5roJQTUAtCyr3iiYiGqIeIFzfrVbEGIFIFD07aWlpdOu6/7uNIg4AfgFAJmAGuYR8Sjn/HsnIcQJgEtELxDxOgCkZNFEtEhEg47jzHcKQqwAcM5PGIaxmzF2HwA2+RCkDQwhRKETEGIHQBY5Nja2IZVK3UXEPQFL3CiVStOu69aiBBFLALLAgYGBVH9//xVEPBuAMOd53vHZ2dkfUUGILYBGgRMTEyeJKA8Aa3xLfAOAw0KIj1FAiATA1NTUukqlsjPQqfe5XO6n/G+aZpaItrRKtlqtQjqdfulfc+UMaLXONM0dAPAIEbf518uIOGLb9r2wEEIDMAxjKyJ+QMTeQDJPOOeDhmGMM8acdkkSESD+TYGIikKIfe3Wjo6O9vb09NxCxEONNYi417btV2EgRAFgP2PseTAJInorhNhlmuYMIk6uJkEieiqEWC6u+Z7h4eG1mUzmThAAER0UQjxbzfPbrQkNAADkcVYOqmUF1Gq1x7lc7o1UB2NsXK5pl0C9Xu9jjG0sl8uThULhczsLIOIDAOjzr3uIeCoWFghD358RFwHgABFdavUi1GoIMsaGbNt+Fza2vD8KBYTKwzRN2c00Ed0UQow0Hia3wWw2exkAzgWG62vP84b+p20QLMui5l2g1UEIAGYWFhami8ViNRTxppuVK6AZQNKOwisUkMSXoSCAcuO0558LEvE6HAQQdGdiPoisAOB/EjvPOb8W5aD717PiMAQ/yQNOUj+KSgVsBoAzAFDgnH/pVueX3ye6HTBu8ZRbQDUQDUB1B1TH1wpQ3QHV8bUCVHdAdXytANUdUB1fK0B1B1TH1wpQ3QHV8bUCVHdAdXytANUdUB1fK0B1B1TH/wPAwGZQx7/OpAAAAABJRU5ErkJggg==" alt="right-icon" style="marginLeft: 7px;">
  </i-cell>
</i-cell-group>
```

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| icon | 左侧图标 | `String` | `''` |
| title | 左侧标题 | `String` | `''` |
| desc | 左侧标题下方文字 | `String` | `''` |
| value | 右侧文字 | `String` | `''` |
| is-link | 是否显示右侧箭头并开启点击反馈 | `Boolean` | `false` |
| to | 同`vue-router`里的`to`，该选项会默认启用`is-link` | `String | Object` | - |
| replace | 路由跳转时使用`replace`而不是`push` | `Boolean` | `false` |

### Cell Slots

| 参数 | 说明 |
|------|------|
| icon | 左侧图标 |
| title | 左侧内容，包含`desc` |
| value | 右侧内容 |
| right-icon | 右侧图标 |

### Cell Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击 cell 时触发 | - |
## Layout 布局

基于`flex`实现，提供`i-row`和`i-col`两个组件进行布局

### 代码演示

#### 简单用法

提供了`24`列栅格，可以在`col`上添加`span`属性设置该列所占格数，还可以通过`offset`属性设置偏移格数

```html
<i-row>
  <i-col :span="8">span: 8</i-col>
  <i-col :span="8">span: 8</i-col>
  <i-col :span="8">span: 8</i-col>
</i-row>
<i-row>
  <i-col :span="5">span: 5</i-col>
  <i-col :span="15" :offset="4">span: 15, offset: 4</i-col>
</i-row>
```

#### 在列元素之间增加间距

通过`gutter`设置列间距，默认为`0`

```html
<i-row :gutter="20">
  <i-col :span="8">span: 8</i-col>
  <i-col :span="8">span: 8</i-col>
  <i-col :span="8">span: 8</i-col>
</i-row>
```

#### 主轴对齐方式

```html
<!-- 左对齐 -->
<i-row>
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
</i-row>
<!-- 居中 -->
<i-row justify="center">
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
</i-row>
<!-- 右对齐 -->
<i-row justify="end">
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
</i-row>
<!-- 每个列元素两侧间隔相等 -->
<i-row justify="space-around">
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
</i-row>
<!-- 两端对齐 -->
<i-row justify="space-between">
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
</i-row>
```

#### 交叉轴对齐方式

```html
<!-- 顶部对齐 -->
<i-row justify="center">
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span:<br>6</i-col>
</i-row>
<!-- 中间对齐 -->
<i-row justify="center" align="center">
  <i-col :span="6">span:<br>6</i-col>
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span: 6</i-col>
</i-row>
<!-- 底部对齐 -->
<i-row justify="center" align="bottom">
  <i-col :span="6">span: <br>6</i-col>
  <i-col :span="6">span: 6</i-col>
  <i-col :span="6">span<br>:<br>6</i-col>
</i-row>
```

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| gutter | 列元素之间的间距（单位为px） | `String | Number` | - |
| justify | 主轴对齐方式，可选值为 `start` `center` `end`<br>`space-around` `space-between` | `String` | `start` |
| align | 交叉轴对齐方式，可选值为 `top` `center` `bottom` | `String` | `top` |

### Col Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| span | 列元素所占格数 | `String | Number` | `24` |
| offset | 列元素偏移格数 | `String | Number` | - |

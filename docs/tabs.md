## Tabs 标签页

> 此 demo 通过手机浏览最佳

#### 简单用法

```html
<i-tab v-model="active" @change="(index) => { this.$toast('Current: ' + index) }">
  <i-tab-pane label="Vue">Vue</i-tab-pane>
  <i-tab-pane label="React">React</i-tab-pane>
  <i-tab-pane label="Angular">Angular</i-tab-pane>
</i-tab>
```

#### 样式风格

```html
<i-tab v-model="active" type="card" color="#f86f74">
  <i-tab-pane label="Vue">Vue</i-tab-pane>
  <i-tab-pane label="React">React</i-tab-pane>
  <i-tab-pane label="Angular">Angular</i-tab-pane>
</i-tab>
```

#### 横向滚动

超过 4 个后会开启横向滚动

```html
<i-tab v-model="active" color="#88dfb9" active-color="#88dfb9" inactive-color="#999" animated>
  <i-tab-pane label="洗护">洗护</i-tab-pane>
  <i-tab-pane label="生鲜">生鲜</i-tab-pane>
  <i-tab-pane label="男装">男装</i-tab-pane>
  <i-tab-pane label="女装">女装</i-tab-pane>
  <i-tab-pane label="手机">手机</i-tab-pane>
  <i-tab-pane label="零食">零食</i-tab-pane>
  <i-tab-pane label="果饮">果饮</i-tab-pane>
</i-tab>
```

#### 自定义标签

```html
<i-tab v-model="active" color="#ffb572" active-color="#ffb572">
  <i-tab-pane>
    <span slot="label"><i class="fa fa-fw fa-tag"></i>&nbsp;label1</span>
    label1
  </i-tab-pane>
  <i-tab-pane>
    <span slot="label"><i class="fa fa-fw fa-tag"></i>&nbsp;label2</span>
    label2
  </i-tab-pane>
</i-tab>
```

#### Tabs Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| value | 当前选中项索引 | `Number` | `0` |
| type | 整体样式风格，可选值为`line` `card`| `String` | `line` |
| color | 当`type`为`line`时是指示条的颜色，<br />当`type`为`card`时是背景色和未激活文字颜色 | `String` | `''` |
| active-color | 激活文字颜色 | `String` | `''` |
| inactive-color | 未激活文字颜色 | `String` | `''` |
| animated | 是否开启内容区切换动画 | `Boolean` | `false` |
| duration | 设置该组件全局动画时长，单位秒 | `Number | String` | `0.3` |
| lazy | 是否切换到当前 tab 以后才渲染 | `Boolean` | `true` |

#### TabPane Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| label | tab 标题 | `String` | `''` |

#### TabPane Slots

| 名称 | 说明 |
|------|------|
| label | 标题区域内容 |

#### Tabs Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 选中项改变时触发 | 索引 |
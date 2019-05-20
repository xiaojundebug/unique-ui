## Radio 单选框

```javascript
export default {
  data() {
    return {
      value1: 0,
      value2: 0,
      value3: 1,
      value4: 0,
      value5: 1
    }
  }
}
```

#### 简单用法

```html
<i-radio-group v-model="value1">
  <i-radio :value="0">a</i-radio>
  <i-radio :value="1">b</i-radio>
  <i-radio :value="2">c</i-radio>
</i-radio-group>
```

#### 自定义颜色

```html
<i-radio-group v-model="value2">
  <i-radio :value="0" color="#2ab9cd">a</i-radio>
  <i-radio :value="1" color="#ff7e4a">b</i-radio>
  <i-radio :value="2" color="#93c653">c</i-radio>
</i-radio-group>
```

#### 禁用

```html
<i-radio-group v-model="value3" disabled>
  <i-radio :value="0">a</i-radio>
  <i-radio :value="1">b</i-radio>
  <i-radio :value="2">c</i-radio>
</i-radio-group>
```

#### 自定义图标

```html
<i-radio-group v-model="value4">
  <i-radio :value="0">
    <i-icon slot="icon" slot-scope="props" :name="props.checked ? 'heart' : 'heart-o'" size="18px" color="#f86f74" />a
  </i-radio>
  <i-radio :value="1">
    <i-icon slot="icon" slot-scope="props" :name="props.checked ? 'heart' : 'heart-o'" size="18px" color="#f86f74" />b
  </i-radio>
  <i-radio :value="2">
    <i-icon slot="icon" slot-scope="props" :name="props.checked ? 'heart' : 'heart-o'" size="18px" color="#f86f74" />c
  </i-radio>
</i-radio-group>
```

#### 搭配 Cell 使用

```html
<i-radio-group v-model="value5">
  <i-cell-group>
    <i-cell title="A" is-link @click="value5 = 0">
      <i-radio slot="right-icon" :value="0" />
    </i-cell>
    <i-cell title="B" is-link @click="value5 = 1">
      <i-radio slot="right-icon" :value="1" />
    </i-cell>
  </i-cell-group>
</i-radio-group>
```

#### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| value | 被选中项的`value`值 | `Boolean | Number | String` | - |
| disabled | 是否禁用所有单选框 | `Boolean` | `false` |

#### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| value | 该单选框被选中后的值，可以认为是一个唯一标识 | `Boolean | Number | String` | - |
| disabled | 是否禁用该单选框 | `Boolean` | `false` |
| color | 选中状态图标背景色 | `String` | 主题色 |

#### Radio Slots

| 名称 | 说明 | slot-scope |
|------|------|------|
| icon | 自定义图标 | checked: 该单选框是否被选中 |

#### RadioGroup Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 选中项改变时触发 | 被选中项的`value`值 |

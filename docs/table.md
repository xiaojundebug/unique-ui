## Table 表格

一个简单的表格组件，使用`ul`模拟而成

```html
<i-table :columns="tableColumns" :data="tableData"></i-table>
```

#### 用法

```javascript
export default {
  data() {
    return {
      tableColumns: [
        {
          title: 'Name',
          key: 'name',
          width: 100,
        },
        {
          title: 'Age',
          key: 'age',
          textAlign: 'right',
          width: 50,
          render(val) {
            if (val >= 18) {
              return "<span style='color:#409eff'>" + val + '</span>'
            } else {
              return "<span style='color:#f86f74'>" + val + '</span>'
            }
          }
        },
        {
          title: 'Address',
          key: 'address',
          width: 150,
        }
      ],
      tableData: [
        {
          name: 'John Brown',
          age: 14,
          address: 'New York No. 1 Lake Park'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park'
        },
        {
          name: 'Jon Snow',
          age: 17,
          address: 'Ottawa No. 2 Lake Park'
        }
      ]
    }
  }
}
```

#### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| columns | 列配置，详情见下个表格 | `Array` | `[]` |
| data | 数据 | `Array` | `[]` |

#### columns

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| title | 列名 | `String` | `''` |
| key | 字段名 | `String` | `''` |
| width | 列宽度，单位 px | `Number` | `100` |
| align | 内容对齐方式，同 css 中 text-align	 | `String` | `left` |
| render | 自定义渲染，参数为原始值	 | `Function` | `''` |

#### Events

| 事件名 | 说明 | 参数 |
|------|------|------|
| click-row | 点击某行时触发 | 当前行原始数据 |
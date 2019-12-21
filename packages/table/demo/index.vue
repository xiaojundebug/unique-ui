<template>
  <div class="demo-table">
    <demo-block title="用法">
      <i-table :columns="tableColumns" :data="tableData"></i-table>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableColumns: [
        {
          title: 'Name',
          key: 'name',
          width: 120,
        },
        {
          title: 'Age',
          key: 'age',
          align: 'right',
          width: 70,
          render(val) {
            if (val >= 18) {
              return "<span style='color:#36be52'>" + val + '</span>'
            } else {
              return "<span style='color:#f86f74'>" + val + '</span>'
            }
          }
        },
        {
          title: 'Address',
          key: 'address'
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
  },
  methods: {}
}
</script>

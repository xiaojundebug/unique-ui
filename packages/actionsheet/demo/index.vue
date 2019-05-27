<template>
  <div class="demo-actionsheet">
    <demo-block title="简单用法">
      <div class="wrapper">
        <i-button @click="show1 = true">简单用法</i-button>
      </div>
    </demo-block>
    <demo-block title="显示取消按钮">
      <div class="wrapper">
        <i-button @click="show2 = true">显示取消按钮</i-button>
      </div>
    </demo-block>
    <demo-block title="自定义样式">
      <div class="wrapper">
        <i-button @click="show3 = true">自定义样式</i-button>
      </div>
    </demo-block>
    <i-actionsheet v-model="show1" :actions="actions1" @select="onSelect" close-on-click-overlay></i-actionsheet>
    <i-actionsheet v-model="show2" :actions="actions2" cancel-text="取消" ></i-actionsheet>
    <i-actionsheet v-model="show3" :actions="actions3" cancel-text="关闭" >
      <template slot="header">
        <span style="font-size:16px;margin:15px 0">确定吗？</span>
        <span style="font-size:13px;margin-bottom:15px;color:#999">删除之后就无法取消了哦</span>
      </template>
    </i-actionsheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      actions1: [{ name: '唱' }, { name: '跳' }, { name: 'rap' }, { name: '篮球', disabled: true }],
      actions2: [{ name: '拍照' }, { name: '从相册选择' }],
      actions3: [{ name: '删除', className: 'danger' }]
    }
  },
  methods: {
    onSelect(data) {
      this.$toast(data)
    }
  }
}
</script>

<style lang="scss">
@import '../../theme/src/common/var';

.demo-actionsheet {
  .wrapper {
    padding: 0 1em;
  }
  .success {
    color: #36be52;
  }
  .warning {
    color: #fda830;
  }
  .danger {
    color: #f86f74;
  }
}
</style>

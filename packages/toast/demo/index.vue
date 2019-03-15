<template>
  <div class="demo-toast">
    <demo-block title="简单用法">
      <div class="wrapper">
        <i-button @click="onClick1">Show Toast</i-button>
      </div>
    </demo-block>
    <demo-block title="设置位置">
      <div class="wrapper">
        <i-button @click="onClick2('top')">Top</i-button>
        <i-button @click="onClick2('center')">Center</i-button>
        <i-button @click="onClick2('bottom')">Bottom</i-button>
      </div>
    </demo-block>
    <demo-block title="设置时长">
      <div class="wrapper">
        <i-button @click="onClick3">显示 5 秒</i-button>
      </div>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '这是一条消息提示'
    }
  },
  methods: {
    onClick1() {
      this.$toast(this.msg)
    },
    onClick2(position) {
      this.$toast(this.msg, { position })
    },
    onClick3() {
      this.$toast(this.msg, { duration: 5000 })
    },
    onClick4() {}
  }
}
</script>

<style lang="scss" scoped>
.demo-toast {
  .wrapper {
    padding: 0 1em;
  }
}
</style>

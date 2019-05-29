<template>
  <div class="demo-toast">
    <demo-block title="常规样式">
      <div class="wrapper">
        <i-button @click="$toast('hello~')">常规样式</i-button>
      </div>
    </demo-block>
    <demo-block title="其它样式">
      <div class="wrapper">
        <i-button @click="$toast.loading('Loading...', { duration: 3000 })">loading</i-button>
        <i-button @click="$toast.success('成功')">success</i-button>
        <i-button @click="$toast.fail('失败')">fail</i-button>
      </div>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    
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

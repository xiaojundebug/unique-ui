<template>
  <div class="demo-toast">
    <demo-block title="简单用法">
      <div class="wrapper">
        <i-button @click="$toast('hello~')">show</i-button>
      </div>
    </demo-block>
    <demo-block title="不同类型">
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

<template>
  <div class="demo-toast">
    <demo-block title="常规样式">
      <i-button @click="$toast('hello~')">常规样式</i-button>
    </demo-block>
    <demo-block title="其它样式">
      <i-button @click="$toast.loading('Loading...', { duration: 3000 })">loading</i-button>
      <i-button @click="$toast.success('成功')">success</i-button>
      <i-button @click="$toast.fail('失败')">fail</i-button>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

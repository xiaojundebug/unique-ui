<template>
  <div class="demo-tab">
    <demo-block title="简单用法">
      <i-tab v-model="active1">
        <i-tab-item label="Vue">0</i-tab-item>
        <i-tab-item label="React">1</i-tab-item>
        <i-tab-item label="Angular">2</i-tab-item>
      </i-tab>
    </demo-block>
    <demo-block title="横向滚动">
      <i-tab v-model="active2">
        <i-tab-item label="洗护">1</i-tab-item>
        <i-tab-item label="生鲜">2</i-tab-item>
        <i-tab-item label="男装">3</i-tab-item>
        <i-tab-item label="女装">4</i-tab-item>
        <i-tab-item label="手机">5</i-tab-item>
      </i-tab>
    </demo-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active1: 0,
      active2: 0
    }
  }
}
</script>
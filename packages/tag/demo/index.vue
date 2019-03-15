<template>
  <div class="demo-tag">
    <demo-block title="简单用法">
      <div class="wrapper">
        <i-tag type="primary">标签</i-tag>
        <i-tag type="info">标签</i-tag>
        <i-tag type="warning">标签</i-tag>
        <i-tag type="success">标签</i-tag>
        <i-tag type="danger">标签</i-tag>
      </div>
    </demo-block>
    <demo-block title="圆角样式">
      <div class="wrapper">
        <i-tag type="primary" round>标签</i-tag>
        <i-tag type="info" round>标签</i-tag>
        <i-tag type="warning" round>标签</i-tag>
        <i-tag type="success" round>标签</i-tag>
        <i-tag type="danger" round>标签</i-tag>
      </div>
    </demo-block>
    <demo-block title="空心样式">
      <div class="wrapper">
        <i-tag type="primary" plain round>标签</i-tag>
        <i-tag type="info" plain>标签</i-tag>
        <i-tag type="warning" plain round>标签</i-tag>
        <i-tag type="success" plain>标签</i-tag>
        <i-tag type="danger" plain round>标签</i-tag>
      </div>
    </demo-block>
    <demo-block title="自定义颜色">
      <div class="wrapper">
        <i-tag color="#f2826a">标签</i-tag>
        <i-tag color="#26c6f4" plain>标签</i-tag>
        <i-tag color="#45c78d" round>标签</i-tag>
        <i-tag color="#a48cef" round plain>标签</i-tag>
      </div>
    </demo-block>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demo-tag {
  .wrapper {
    padding: 0 1em;
    .i-tag:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>

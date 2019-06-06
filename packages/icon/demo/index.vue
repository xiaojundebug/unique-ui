<template>
  <div class="demo-icon">
    <demo-block title="简单用法" padded>
      <i-icon name="home"></i-icon>
    </demo-block>
    <demo-block title="自定义大小" padded>
      <i-icon name="home" size="16px"></i-icon>
      <i-icon name="home" size="32px"></i-icon>
      <i-icon name="home" size="48px"></i-icon>
    </demo-block>
    <demo-block title="自定义颜色" padded>
      <i-icon name="home" color="#49b683"></i-icon>
      <i-icon name="home" color="#ab97c3"></i-icon>
    </demo-block>
  </div>
</template>

<style lang="scss" scoped>
.demo-icon {
  font-size: 32px;
}
</style>

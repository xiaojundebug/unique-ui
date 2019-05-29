<template>
  <div class="demo-icon">
    <demo-block title="简单用法">
      <div class="wrapper">
        <i-icon name="home"></i-icon>
      </div>
    </demo-block>
    <demo-block title="自定义大小">
      <div class="wrapper">
        <i-icon name="home" size="16px"></i-icon>
        <i-icon name="home" size="32px"></i-icon>
        <i-icon name="home" size="48px"></i-icon>
      </div>
    </demo-block>
    <demo-block title="自定义颜色">
      <div class="wrapper">
        <i-icon name="home" color="#49b683"></i-icon>
        <i-icon name="home" color="#ab97c3"></i-icon>
      </div>
    </demo-block>
  </div>
</template>

<style lang="scss" scoped>
.demo-icon {
  .wrapper {
    padding: 0 10px;
    font-size: 32px;
  }
}
</style>

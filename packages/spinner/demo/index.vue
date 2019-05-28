<template>
  <div class="demo-spinner">
    <demo-block title="简单用法">
      <div class="wrapper">
        <i-spinner type="ios"></i-spinner>
        <i-spinner type="dots"></i-spinner>
        <i-spinner type="ripple"></i-spinner>
        <i-spinner type="lines"></i-spinner>
        <i-spinner type="crescent"></i-spinner>
      </div>
    </demo-block>
    <demo-block title="设置大小">
      <div class="wrapper">
        <i-spinner type="ios" size="15px"></i-spinner>
        <i-spinner type="dots" size="25px"></i-spinner>
        <i-spinner type="ripple" size="35px"></i-spinner>
        <i-spinner type="lines" size="45px"></i-spinner>
        <i-spinner type="crescent" size="55px"></i-spinner>
      </div>
    </demo-block>
    <demo-block title="自定义颜色">
      <div class="wrapper">
        <i-spinner type="ios" color="#f86f74"></i-spinner>
        <i-spinner type="dots" color="#a48cef"></i-spinner>
        <i-spinner type="ripple" color="#33cd5f"></i-spinner>
        <i-spinner type="lines" color="#387ef5"></i-spinner>
        <i-spinner type="crescent" color="#26c6f4"></i-spinner>
      </div>
    </demo-block>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.demo-spinner {
  .wrapper {
    padding: 0 1em;
    display: flex;
    align-items: center;
    .i-spinner {
      margin: 0 5px;
    }
  }
}
</style>


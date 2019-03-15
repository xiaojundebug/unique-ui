<template>
  <div class="demo-loading">
    <demo-block title="简单用法">
      <div class="wrapper">
        <i-loading type="ios"></i-loading>
        <i-loading type="dots"></i-loading>
        <i-loading type="ripple"></i-loading>
        <i-loading type="lines"></i-loading>
        <i-loading type="crescent"></i-loading>
      </div>
    </demo-block>
    <demo-block title="设置大小">
      <div class="wrapper">
        <i-loading type="ios" size="15px"></i-loading>
        <i-loading type="dots" size="25px"></i-loading>
        <i-loading type="ripple" size="35px"></i-loading>
        <i-loading type="lines" size="45px"></i-loading>
        <i-loading type="crescent" size="55px"></i-loading>
      </div>
    </demo-block>
    <demo-block title="自定义颜色">
      <div class="wrapper">
        <i-loading type="ios" color="#f86f74"></i-loading>
        <i-loading type="dots" color="#a48cef"></i-loading>
        <i-loading type="ripple" color="#33cd5f"></i-loading>
        <i-loading type="lines" color="#387ef5"></i-loading>
        <i-loading type="crescent" color="#26c6f4"></i-loading>
      </div>
    </demo-block>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.demo-loading {
  .wrapper {
    padding: 0 1em;
    display: flex;
    align-items: center;
    .i-loading {
      margin: 0 5px;
    }
  }
}
</style>


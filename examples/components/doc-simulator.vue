<template>
  <div class="doc-simulator">
    <div class="doc-simulator__inner">
      <iframe :src="src" frameborder="0" width="100%" height="100%" scrolling="auto"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: String
  }
}
</script>

<style lang="scss" scoped>
.doc-simulator {
  position: relative;
  width: 418px;
  height: 811px;
  margin: 20px 30px 0 30px;
  background: url('../assets/images/device-frame.png') no-repeat center 0;
  background-size: 100% 100%;
  .doc-simulator__inner {
    position: absolute;
    top: 81px;
    left: 27px;
    width: 362px;
    height: 709px;
    border: 1px solid #edf0f4;
    border-radius: 0 0 45px 45px;
    overflow: hidden;
    background-color: #edf0f4;
  }
}
</style>

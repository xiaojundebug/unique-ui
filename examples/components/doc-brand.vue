<template>
  <div class="doc-brand">
    <section ref="logoWrapper">
      <ul class="doc-brand__logo">
        <li v-for="item in 6"></li>
      </ul>
    </section>
    <span class="doc-brand__name">UNIQUE</span>
  </div>
</template>

<script>
export default {
  mounted() {
    const hint = window.localStorage.getItem('LOGO_HINT')
    if (!hint) {
      this.$refs.logoWrapper.classList = 'animated bounce delay-1s'
      window.localStorage.setItem('LOGO_HINT', 1)
    }
  }
}
</script>

<style lang="scss" scoped>
$size: 25px;
$shell-offset: 1.5px;
$border-radius: 2px;

.doc-brand {
  display: inline-block;
  section {
    display: inline-block;
    vertical-align: middle;
    .doc-brand__logo {
      position: relative;
      width: $size;
      height: $size;
      transform-style: preserve-3d;
      transform: rotateX(-35deg) rotateY(45deg);
      transition: transform 2s;
      &:hover {
        transform: rotateX(325deg) rotateY(405deg);
      }
      li {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #fff;
        transform-style: preserve-3d;
        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: $size - $shell-offset * 2;
          height: $size - $shell-offset * 2;
          border-radius: $border-radius;
          transform: translate3d($shell-offset, $shell-offset, 0.1px);
          background-color: #000;
        }
        &:nth-child(1) {
          transform: rotateX(90deg) translateZ($size / 2);
        }
        &:nth-child(2) {
          transform: rotateX(180deg) translateZ($size / 2);
        }
        &:nth-child(3) {
          transform: rotateX(270deg) translateZ($size / 2);
        }
        &:nth-child(4) {
          transform: rotateX(360deg) translateZ($size / 2);
        }
        &:nth-child(5) {
          transform: rotateY(90deg) translateZ($size / 2);
        }
        &:nth-child(6) {
          transform: rotateY(-90deg) translateZ($size / 2);
        }
      }
    }
  }
  .doc-brand__name {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: #333;
    vertical-align: middle;
    position: relative;
    top: 1px;
    margin-left: 10px;
  }
}
</style>


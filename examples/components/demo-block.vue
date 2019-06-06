<template>
  <section class="demo-block">
    <h2 class="demo-block__title">{{ title }}</h2>
    <div :class="['demo-block__body', { 'padded': this.padded }]">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DemoBlock',
  props: {
    title: {
      type: String
    },
    padded: Boolean
  }
}
</script>

<style lang="scss" scoped>
.demo-block {
  &__title {
    padding: 15px;
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    color: rgba(69, 90, 100, 0.6);
  }
  &__body{
    &.padded{
      padding: 0 15px;
    }
  }
}
</style>

<template>
  <section class="demo-block">
    <h2 class="demo-block__title">{{ title }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'DemoBlock',
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.demo-block {
  &__title {
    padding: 1em;
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    color: rgba(69, 90, 100, 0.6);
  }
}
</style>

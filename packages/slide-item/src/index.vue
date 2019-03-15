<template>
  <div
    class="i-slide-item"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ISlideItem',
  props: {},
  data() {
    return {
      offset: 0
    }
  },
  computed: {
    style() {
      const { w, h } = this.$parent

      return {
        width: w + 'px',
        height: h + 'px',
        transform: `translateX(${this.offset}px)`
      }
    }
  },
  beforeCreate() {
    this.$parent.items.push(this)
  },
  destroyed() {
    this.$parent.items.splice(this.$parent.items.indexOf(this), 1)
  },
  methods: {}
}
</script>

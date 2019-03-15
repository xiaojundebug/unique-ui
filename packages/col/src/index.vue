<template>
  <div
    :class="classList"
    :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ICol',
  props: {
    span: [Number, String],
    offset: [Number, String]
  },
  computed: {
    classList() {
      return [
        'i-col',
        {
          [`i-col--${this.span}`]: this.span,
          [`i-col--offset-${this.offset}`]: this.offset
        }
      ]
    },
    gutter() {
      return (this.$parent && Number(this.$parent.gutter)) || 0
    },
    style() {
      const padding = `${this.gutter / 2}px`
      return this.gutter ? { padding: `0 ${padding}` } : {}
    }
  },
  methods: {}
}
</script>

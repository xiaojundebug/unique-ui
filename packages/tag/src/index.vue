<template>
  <span
    :class="classList"
    :style="style"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'ITag',
  props: {
    type: String,
    plain: Boolean,
    round: Boolean,
    color: String
  },
  computed: {
    classList() {
      return [
        'i-tag',
        {
          [`i-tag--${this.type}`]: this.type,
          'i-tag--round': this.round,
          'i-tag--plain': this.plain,
          'i-1px': this.plain
        }
      ]
    },
    style() {
      if (!this.color) return
      const key = this.plain ? 'color' : 'backgroundColor'
      return { [key]: this.color }
    }
  },
  methods: {}
}
</script>


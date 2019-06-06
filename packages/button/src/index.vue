<template>
  <button
    :disabled="isDisable"
    :class="classList"
    :style="buttonStyle"
    @click="cb"
  >
    <i-spinner
      v-if="loading"
      :color="spinnerColor"
      :size="spinnerSize"
    />
    <span
      class="i-button__text"
      :style="textStyle"
    >
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'IButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: Boolean,
    round: Boolean,
    plain: Boolean,
    dashed: Boolean,
    circle: Boolean,
    loading: Boolean,
    color: String,
    textColor: String
  },
  computed: {
    isDisable() {
      return this.disabled || this.loading
    },
    classList() {
      return [
        'i-button',
        `i-button--${this.type}`,
        `i-button--${this.size}`,
        {
          'i-button--round': this.round,
          'i-button--plain': this.plain,
          'i-button--dashed': this.dashed,
          'i-button--circle': this.circle,
          'i-button--loading': this.loading
        }
      ]
    },
    buttonStyle() {
      const style = {}
      const { color } = this

      color && (style.color = color)

      return style
    },
    textStyle() {
      const { color, textColor, plain, dashed } = this

      if (!color && !textColor) return

      const style = {}

      if (plain || dashed) {
        style.color = textColor || color
      } else {
        style.color = textColor || '#fff'
      }

      return style
    },
    spinnerColor() {
      return this.type === 'default' ? '#000' : '#fff'
    },
    spinnerSize() {
      return { normal: '18px', large: '20px', small: '13px', mini: '10px' }[this.size]
    }
  },
  methods: {
    cb(ev) {
      this.$emit('click', ev)
    }
  }
}
</script>


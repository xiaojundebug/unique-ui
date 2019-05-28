<template>
  <button
    :disabled="isDisable"
    :class="classList"
    @click="cb"
  >
    <i-spinner
      v-if="loading"
      :color="spinnerColor"
      :size="spinnerSize"
    />
    <span class="i-button__text">
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
    loading: Boolean
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
          'i-button--plain': this.plain && this.type !== 'default',
          'i-button--dashed': this.dashed && this.type !== 'default',
          'i-button--circle': this.circle,
          'i-button--loading': this.loading
        }
      ]
    },
    spinnerColor() {
      return this.type === 'default' ? '#000' : '#fff'
    },
    spinnerSize() {
      return { normal: '17px', large: '20px', small: '13px', mini: '10px' }[this.size]
    }
  },
  methods: {
    cb(ev) {
      this.$emit('click', ev)
    }
  }
}
</script>


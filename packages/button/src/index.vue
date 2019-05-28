<template>
  <button
    :disabled="isDisable"
    :class="classList"
    @click="cb"
  >
    <i-loading
      v-if="loading"
      :color="spinerColor"
      :size="spinerSize"
    />
    <slot />
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
          'i-button--loading': this.loading
        }
      ]
    },
    spinerColor() {
      return this.type === 'default' ? '#000' : '#fff'
    },
    spinerSize() {
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


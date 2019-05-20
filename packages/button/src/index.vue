<template>
  <button
    :disabled="isDisable"
    :class="classList"
    @click="cb">
    <i
      class="fa fa-refresh fa-spin"
      v-if="loading"/>
    <slot/>
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
    }
  },
  methods: {
    cb(ev) {
      this.$emit('click', ev)
    }
  }
}
</script>

<style src="../../theme/button.scss"/>


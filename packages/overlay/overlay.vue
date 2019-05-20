<template>
  <transition name="fadeIn">
    <div
      v-show="show"
      class="i-overlay"
      :style="style"
      @click="handleClick"
      @touchmove.prevent></div>
  </transition>
</template>
<script>
export default {
  name: 'IOverlay',
  props: {
    onClick: {
      type: Function
    },
    opacity: {
      type: Number,
      default: 0.5
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    style() {
      return {
        opacity: this.opacity,
        'background-color': this.color
      }
    }
  },
  methods: {
    handleClick() {
      if (this.onClick) {
        this.onClick()
      }
    }
  }
}
</script>

<style src="../theme/overlay.scss"/>

<template>
  <transition :name="computedTransitionName">
    <div
      :class="classList"
      v-show="show"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import { popup } from 'unique-ui/packages/mixins'

export default {
  name: 'IPopup',
  mixins: [popup],
  props: {

  },
  data() {
    return {}
  },
  computed: {
    classList() {
      return ['i-popup', `i-popup--${this.position}`]
    },
    computedTransitionName() {
      return (
        this.transitionName ||
        {
          center: 'zoomIn',
          top: 'slideInDown',
          right: 'slideInRight',
          bottom: 'slideInUp',
          left: 'slideInLeft'
        }[this.position]
      )
    }
  },
  methods: {
    // 响应overlay事件
    handleOverlayClick() {
      this.$emit('click-overlay')
    }
  }
}
</script>


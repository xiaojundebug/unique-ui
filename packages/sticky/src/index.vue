<template>
  <div
    :class="wrapperClassList"
    ref="wrapper"
    :style="wrapperStyle">
    <div
      class="i-sticky__inner"
      :style="innerStyle"
      ref="inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { featureTest } from 'packages/utils'
import { on, off } from 'packages/utils/event'
const nativeSupported = featureTest('position', 'sticky')

export default {
  name: 'ISticky',
  props: {
    top: {
      type: [Number, String],
      default: 0
    },
    zIndex: {
      type: [Number, String],
      default: 1
    }
  },
  data() {
    return {
      fixed: false,
      rafTimer: null,
      scrollHandler: () => {
        cancelAnimationFrame(this.rafTimer)
        this.rafTimer = requestAnimationFrame(() => {
          const { wrapper } = this.$refs
          const rect = wrapper.getBoundingClientRect()

          if (!this.fixed && rect.top <= this.top) {
            wrapper.style.height = rect.height + 'px'
            this.fixed = true
          } else if (this.fixed && rect.top > this.top) {
            wrapper.style.height = 'auto'
            this.fixed = false
          }
        })
      }
    }
  },
  computed: {
    wrapperClassList() {
      return [
        'i-sticky',
        {
          'i-sticky--native': nativeSupported,
          'i-sticky--simulate': !nativeSupported && this.fixed
        }
      ]
    },
    wrapperStyle() {
      if (!nativeSupported) return
      return { top: this.top + 'px', zIndex: this.zIndex }
    },
    innerStyle() {
      if (nativeSupported) return
      return {
        top: this.fixed ? this.top + 'px' : '',
        zIndex: this.zIndex
      }
    }
  },
  mounted() {
    if (nativeSupported) return
    on(window, 'scroll', this.scrollHandler, true)
  },
  destroyed() {
    if (nativeSupported) return
    cancelAnimationFrame(this.rafTimer)
    off(window, 'scroll', this.scrollHandler)
  },
  methods: {}
}
</script>

<style src="../../theme/sticky.scss"/>

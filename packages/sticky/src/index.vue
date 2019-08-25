<template>
  <div
    :class="wrapperClassList"
    ref="wrapper"
    :style="wrapperStyle"
  >
    <div
      class="i-sticky__inner"
      :style="innerStyle"
      ref="inner"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import raf from 'raf'
import { featureTest, on, off } from 'unique-ui/packages/utils'
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
      rafHandle: null
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
    this.setListener(true)
  },
  destroyed() {
    if (nativeSupported) return
    raf.cancel(this.rafHandle)
    this.setListener(false)
  },
  methods: {
    scrollHandler() {
      raf.cancel(this.rafHandle)
      this.rafHandle = raf(() => {
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
    },
    setListener(bind) {
      ;(bind ? on : off)(window, 'scroll', this.scrollHandler, true)
    }
  }
}
</script>


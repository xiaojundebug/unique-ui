<template>
  <div :class="classList">
    <div
      class="i-slide__track"
      :style="trackStyle"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @touchcancel="onTouchEnd"
      @transitionend="onTransitionEnd"
    >
      <slot></slot>
    </div>
    <slot
      name="indicator"
      :active="activeIndicator"
    >
      <ul class="i-slide__indicators">
        <li
          v-for="index in count"
          :class="{ 'i-slide__indicator': true, active: index - 1 === activeIndicator }"
          :key="index"
        ></li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'ISlide',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Number,
      default: 3000
    },
    duration: {
      type: Number,
      default: 500
    },
    initialSlide: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      w: 0,
      h: 0,
      active: 0,
      offset: 0,
      swiping: false,
      items: [],
      startX: 0,
      deltaX: 0,
      timer: null
    }
  },
  computed: {
    classList() {
      return ['i-slide']
    },
    count() {
      return this.items.length
    },
    trackStyle() {
      return {
        width: `${this.count * this.w}px`,
        transitionDuration: `${this.swiping ? 0 : this.duration}ms`,
        transform: `translateX(${this.offset}px)`
      }
    },
    trackWidth() {
      return this.count * this.w
    },
    activeIndicator() {
      return (this.active + this.count) % this.count
    }
  },
  mounted() {
    this.init()
  },
  destroyed() {
    this.clearTimer()
  },
  methods: {
    init(active = this.initialSlide) {
      const rect = this.$el.getBoundingClientRect()
      this.w = rect.width
      this.h = rect.height
      this.active = active
      this.offset = this.count > 1 ? -this.w * this.active : 0
      this.autoPlay()
    },
    onTouchStart(ev) {
      this.clearTimer()
      this.swiping = true
      this.resetTouchStatus()
      this.startX = ev.touches[0].clientX
      this.correctPosition()
    },
    onTouchMove(ev) {
      if (!this.swiping) return
      ev.preventDefault()
      this.deltaX = ev.touches[0].clientX - this.startX
      this.move(0, Math.min(Math.max(this.deltaX, -this.w), this.w))
    },
    onTouchEnd(ev) {
      if (!this.swiping) return
      if (this.deltaX) {
        this.move(Math.abs(this.deltaX) > 0 ? (this.deltaX > 0 ? -1 : 1) : 0)
      }
      this.swiping = false
      this.autoPlay()
    },
    correctPosition() {
      if (this.active <= -1) {
        this.move(this.count)
      }
      if (this.active >= this.count) {
        this.move(-this.count)
      }
    },
    move(move = 0, offset = 0) {
      const { items, active, count, trackWidth, deltaX } = this
      const atFirst = active === 0
      const atLast = active === count - 1

      const outOfBounds = !this.loop && ((atFirst && (offset > 0 || move < 0)) || (atLast && (offset < 0 || move > 0)))

      if (outOfBounds || count <= 1) return

      items[0].offset = atLast && (deltaX < 0 || move > 0) ? trackWidth : 0
      items[count - 1].offset = atFirst && (deltaX > 0 || move < 0) ? -trackWidth : 0

      if (move && active + move >= -1 && active + move <= count) {
        this.active += move
      }
      this.offset = offset - this.active * this.w
    },
    resetTouchStatus() {
      this.startX = 0
      this.deltaX = 0
    },
    clearTimer() {
      window.clearInterval(this.timer)
    },
    autoPlay() {
      const { autoplay } = this

      if (autoplay && this.count > 1) {
        this.clearTimer()
        this.timer = setTimeout(() => {
          this.swiping = true
          this.correctPosition()
          setTimeout(() => {
            this.swiping = false
            this.move(1)
            this.autoPlay()
          }, 30)
        }, autoplay)
      }
    },
    slideTo(index) {
      this.swiping = true
      this.correctPosition()
      setTimeout(() => {
        this.swiping = false
        this.move((index % this.count) - this.active)
      }, 30)
    },
    onTransitionEnd() {
      this.$emit('change', this.activeIndicator)
    }
  },
  watch: {
    items() {
      this.init()
    },
    initialSlide() {
      this.init()
    },
    autoplay(autoplay) {
      if (autoplay) {
        this.autoPlay()
      } else {
        this.clearTimer()
      }
    }
  }
}
</script>


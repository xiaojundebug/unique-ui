<template>
  <div
    :class="classList"
    v-show="isShow"
    @click="onClick"
  >
    <div
      class="i-notice-bar__inner"
      :style="innerStyle"
    >
      <div class="i-notice-bar__left">
        <slot name="left">
          <i :class="leftIconClassName"></i>
        </slot>
      </div>

      <div
        class="i-notice-bar__main"
        ref="wrapper"
      >
        <div
          :class="contentClass"
          :style="contentStyle"
          ref="content"
          @animationend="onAnimationEnd"
          @webkitAnimationEnd="onAnimationEnd"
        >
          <slot>{{ text }}</slot>
        </div>
      </div>

      <div
        class="i-notice-bar__right"
        v-if="mode || $slots.right"
        @click.stop="onClickRight"
      >
        <slot name="right">
          <i :class="rightIconClassName"></i>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'INoticeBar',
  props: {
    text: String,
    mode: String,
    backgroundColor: String,
    color: String,
    delay: {
      type: Number,
      default: 1
    },
    speed: {
      type: Number,
      default: 50
    },
    scrollable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isShow: true,
      firstRound: true,
      wrapperWidth: 0,
      offsetWidth: 0,
      duration: 0,
      animationClass: ''
    }
  },
  computed: {
    classList() {
      return ['i-notice-bar']
    },
    innerStyle() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color
      }
    },
    leftIconClassName() {
      return ['i-notice-bar__left-icon', 'iconfont', 'icon-volume']
    },
    rightIconClassName() {
      if (!this.mode) return
      return [
        'i-notice-bar__right-icon',
        'iconfont',
        this.mode === 'closeable' ? 'icon-close-circle' : 'icon-arrow-right'
      ]
    },
    contentClass() {
      return ['i-notice-bar__content', this.animationClass, { ellipsis: !this.scrollable }]
    },
    contentStyle() {
      return {
        paddingLeft: this.firstRound ? 0 : this.wrapperWidth + 'px',
        animationDelay: (this.firstRound ? this.delay : 0) + 's',
        animationDuration: this.duration + 's'
      }
    }
  },
  methods: {
    onAnimationEnd() {
      this.firstRound = false
      this.$nextTick(() => {
        this.animationClass = 'i-notice-bar--loop'
        this.duration = (this.offsetWidth + this.wrapperWidth) / this.speed
      })
    },
    onClick() {
      this.$emit('click')
    },
    onClickRight() {
      if (this.mode === 'closeable') this.isShow = false
    }
  },
  watch: {
    text: {
      handler() {
        this.$nextTick(() => {
          const { wrapper, content } = this.$refs
          if (!wrapper || !content) return

          const wrapperWidth = wrapper.getBoundingClientRect().width
          const offsetWidth = content.getBoundingClientRect().width

          if (this.scrollable && offsetWidth > wrapperWidth) {
            this.wrapperWidth = wrapperWidth
            this.offsetWidth = offsetWidth
            this.duration = offsetWidth / this.speed
            if (this.firstRound) this.animationClass = 'i-notice-bar--play'
          }
        })
      },
      immediate: true
    }
  }
}
</script>


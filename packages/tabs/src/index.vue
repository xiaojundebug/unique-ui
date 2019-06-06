<script>
import { event } from 'unique-ui/packages/utils'
import TabTitle from './title'
const raf = require('raf')

export default {
  name: 'ITabs',
  model: {
    prop: 'value',
    event: 'change'
  },
  components: { TabTitle },
  props: {
    value: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'line'
    },
    color: String,
    activeColor: String,
    inactiveColor: String,
    animated: Boolean,
    duration: {
      type: [Number, String],
      default: 0.3
    },
    lazy: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      // 用来控制关闭某些场景下的动画
      shouldShowAnimation: false,
      tabs: [],
      trackStyle: {}
    }
  },
  computed: {
    classList() {
      return [
        'i-tab',
        `i-tab--${this.type}`,
        {
          'i-tab--scrollable': this.scrollable,
          'i-tab--animated': this.animated
        }
      ]
    },
    wrapClassList() {
      return ['i-tab__wrap', { 'i-1px--t': this.type === 'line', 'i-1px--b': this.type === 'line' }]
    },
    scrollable() {
      return this.tabs.length > 4
    }
  },
  watch: {
    value: {
      handler(val, oldVal) {
        const firstTime = oldVal === undefined

        // 初始进来禁止显示动画
        if (!firstTime && !this.shouldShowAnimation) this.shouldShowAnimation = true

        this.$nextTick(() => {
          this.calcTrackStyle()
          this.scrollIntoView(firstTime)
        })
      },
      immediate: true
    },
    tabs() {
      this.$nextTick(this.calcTrackStyle)
    }
  },
  mounted() {
    this.setResizeListener(true)
  },
  beforeDestroy() {
    this.setResizeListener(false)
  },
  methods: {
    onClick(index) {
      if (this.value !== index) {
        this.$emit('change', index)
      }
    },
    // 绑定或解绑 window resize 事件
    setResizeListener(bind) {
      // card 类型没必要监听 resize 事件
      if (this.type === 'card') return
      ;(bind ? event.on : event.off)(window, 'resize', this.handleResizeEvent, true)
    },
    handleResizeEvent() {
      // resize 时禁止显示动画
      this.shouldShowAnimation = false
      this.scrollIntoView()
      this.calcTrackStyle()
    },
    // 获取当前选中 tab 元素
    getCurrentTabEl() {
      return this.$refs['title' + this.value].$el
    },
    calcTrackStyle() {
      const { getCurrentTabEl, color, shouldShowAnimation, duration } = this
      const { offsetLeft, offsetWidth } = getCurrentTabEl()

      this.trackStyle = {
        width: `${offsetWidth / 2}px`,
        transform: `translateX(${offsetLeft + offsetWidth / 4}px)`,
        backgroundColor: color,
        transition: `transform ${shouldShowAnimation ? duration : 0}s`
      }
    },
    getContentStyle() {
      if (!this.animated) return

      return {
        transform: `translateX(-${100 * this.value}%)`,
        transition: `${this.duration}s`
      }
    },
    // 滚动当前 tab 到可视位置
    scrollIntoView() {
      if (!this.scrollable) return

      const { $refs: { nav }, getCurrentTabEl } = this
      const { scrollLeft, offsetWidth: navWidth } = nav
      const { offsetLeft, offsetWidth: tabWidth } = getCurrentTabEl()

      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2)
    },
    scrollTo(el, from, to) {
      if (!this.shouldShowAnimation) {
        el.scrollLeft += to - from
        return
      }

      let count = 0
      const frames = Math.round((this.duration * 1000) / 16)
      const animate = () => {
        el.scrollLeft += (to - from) / frames
        if (++count < frames) {
          raf(animate)
        }
      }
      animate()
    }
  },
  render() {
    const nav = (
      <div class={this.wrapClassList}>
        <div class='i-tab__nav' ref='nav'>
          {this.type === 'line' && <div class='i-tab__track' style={this.trackStyle} />}
          {this.tabs.map((el, index) => {
            el.index = index
            return (
              <tab-title
                active={index === this.value}
                onClick={() => this.onClick(index)}
                ref={'title' + index}
              >
                <span class='ellipsis'>{el.$slots.label || el.label}</span>
              </tab-title>
            )
          })}
        </div>
      </div>
    )

    return (
      <div class={this.classList}>
        {nav}
        <div class='i-tab__content' style={this.getContentStyle()} ref='content'>
          {this.$slots.default}
        </div>
      </div>
    )
  }
}
</script>


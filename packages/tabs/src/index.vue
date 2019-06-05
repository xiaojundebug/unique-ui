<script>
import { event } from 'unique-ui/packages/utils'
import TabTitle from './title'
const raf = require('raf')

export default {
  name: 'ITab',
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
      dirty: false,
      tabs: [],
      currTabEl: null
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
    trackStyle() {
      const { currTabEl, color, dirty, duration } = this

      if (!currTabEl) return

      const { offsetLeft, offsetWidth } = currTabEl

      return {
        width: `${offsetWidth / 2}px`,
        transform: `translateX(${offsetLeft + offsetWidth / 4}px)`,
        backgroundColor: color,
        transition: `transform ${dirty ? duration : 0}s, width ${duration}s`
      }
    },
    scrollable() {
      return this.tabs.length > 4
    }
  },
  watch: {
    value: {
      async handler(val, oldVal) {
        const first = oldVal === undefined

        if (!first && !this.dirty) this.dirty = true

        this.currTabEl = await this.getCurrentTabEl()
        this.scrollIntoView(first)
      },
      immediate: true
    }
  },
  mounted() {
    const tabSlots = this.$slots.default.filter(
      vnode =>
        vnode.tag &&
        vnode.componentOptions &&
        vnode.componentOptions.Ctor.options.name === 'ITabPane'
    )
    this.tabs = tabSlots.map(({ componentInstance }) => componentInstance)
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
      ;(bind ? event.on : event.off)(window, 'resize', this.calcTrackStyle, true)
    },
    // 获取当前选中 tab 元素
    getCurrentTabEl() {
      return this.$nextTick().then(() => Promise.resolve(this.$refs['title' + this.value].$el))
    },
    getContentStyle() {
      if (!this.animated) return
      return {
        transform: `translateX(-${100 * this.value}%)`,
        transition: `${this.duration}s`
      }
    },
    // 滚动当前 tab 到可视位置
    scrollIntoView(immediate) {
      if (!this.scrollable) return

      const { nav } = this.$refs

      const { scrollLeft, offsetWidth: navWidth } = nav
      const { offsetLeft, offsetWidth: tabWidth } = this.currTabEl

      this.scrollTo(nav, scrollLeft, offsetLeft - (navWidth - tabWidth) / 2, immediate)
    },
    scrollTo(el, from, to, immediate) {
      if (immediate) {
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


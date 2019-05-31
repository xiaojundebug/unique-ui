<script>
export default {
  name: 'ITab',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tabs: [],
      trackStyle: {}
    }
  },
  computed: {},
  mounted() {
    const tabSlots = this.$slots.default.filter(
      vnode =>
        vnode.tag &&
        vnode.componentOptions &&
        vnode.componentOptions.Ctor.options.name === 'ITabItem'
    )
    this.tabs = tabSlots.map(({ componentInstance }) => componentInstance)

    this.$nextTick(() => {
      this.calcTrack()
    })
  },
  methods: {
    onClick(index) {
      this.$emit('change', index)
    },
    calcTrack() {
      const ele = this.$refs['tab' + this.value]

      if (!ele) return

      const rect = ele.getBoundingClientRect()

      this.trackStyle = {
        width: `${rect.width / 2}px`,
        transform: `translateX(${ele.offsetLeft + rect.width / 4}px)`
      }
    }
  },
  watch: {
    value(newVal) {
      this.calcTrack()
    }
  },
  render() {
    const nav = (
      <div class='i-tab__wrapper'>
        {this.tabs.map((el, index) => {
          el.value = index
          return (
            <div
              class={['i-tab__item', { 'i-tab__item--active': index === this.value }]}
              onClick={() => this.onClick(index)}
              ref={'tab' + index}
            >
              <span class='ellipsis'>{el.$slots.label || el.label}</span>
            </div>
          )
        })}
        <div class='i-tab__track' style={this.trackStyle} />
      </div>
    )

    const content = <div class='i-tab__content i-1px--t'>{this.$slots.default}</div>

    return (
      <div class={['i-tab', { 'i-tab--scrollable': this.tabs.length > 4 }]}>
        {nav}
        {content}
      </div>
    )
  }
}
</script>


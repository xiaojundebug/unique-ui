import Component from './src'

let vm = null
let Toast = null
let timer = null

function clear() {
  try {
    document.body.removeChild(vm.$el)
    vm.$destroy()
    vm = null
  } catch (error) {}
}

function handler(msg, opts = {}) {
  if (vm) clear()
  if (timer) window.clearTimeout(timer)

  vm = new Toast()
  document.body.appendChild(vm.$mount().$el)

  const { type, duration = 2500, overlay } = opts

  vm.text = msg // 设置弹窗内容
  vm.type = type // 设置弹窗类型
  vm.overlay = overlay

  vm.show = true

  vm.$on('toggle', function(val) {
    this.show = val
  })

  if (duration) {
    timer = setTimeout(() => {
      vm.show = false
    }, duration)
  }
}

Component.install = function(Vue) {
  Toast = Vue.extend(Component)
  Vue.prototype.$toast = (msg, opts = {}) =>
    handler(msg, { type: 'normal', ...opts, overlay: false })
  Vue.prototype.$toast.loading = (msg, opts = {}) => handler(msg, { duration: 0, ...opts, type: 'loading' })
  Vue.prototype.$toast.success = (msg, opts = {}) => handler(msg, { ...opts, type: 'success' })
  Vue.prototype.$toast.fail = (msg, opts = {}) => handler(msg, { ...opts, type: 'fail' })

  Vue.prototype.$toast.close = clear

  Vue.component(Component.name, Component)
}

export default Component

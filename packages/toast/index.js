import Vue from 'vue'
import Component from './src'

const Toast = Vue.extend(Component)
let vm = null
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

  vm.text = msg + '' // 设置弹窗内容
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

Component.toast = (msg, opts = {}) => handler(msg, { type: 'normal', ...opts, overlay: false })
Component.loading = (msg, opts = {}) => handler(msg, { duration: 0, ...opts, type: 'loading' })
Component.success = (msg, opts = {}) => handler(msg, { ...opts, type: 'success' })
Component.fail = (msg, opts = {}) => handler(msg, { ...opts, type: 'fail' })

Component.install = function(Vue) {
  Vue.prototype.$toast = this.toast
  Vue.prototype.$toast.loading = this.loading
  Vue.prototype.$toast.success = this.success
  Vue.prototype.$toast.fail = this.fail

  Vue.prototype.$toast.close = clear

  Vue.component(Component.name, Component)
}

export default Component

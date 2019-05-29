import Vue from 'vue'
import Component from './src'

const Modal = Vue.extend(Component)
let vm = null

function clear() {
  try {
    document.body.removeChild(vm.$el)
    vm.$destroy()
    vm = null
  } catch (error) {}
}

function handler(msg, opts = {}) {
  return new Promise((resolve, reject) => {
    if (vm) clear()

    vm = new Modal()
    document.body.appendChild(vm.$mount().$el)

    const {
      type,
      title,
      confirmText,
      cancelText,
      closeOnClickOverlay,
      autoClose = true,
      transitionName
    } = opts

    title && (vm.title = title)
    vm.text = msg
    vm.type = type
    vm.closeOnClickOverlay = closeOnClickOverlay
    vm.transitionName = transitionName

    confirmText && (vm.confirmText = confirmText)
    cancelText && (vm.cancelText = cancelText)

    vm.show = true

    if (autoClose) {
      vm.$on('toggle', function(val) {
        this.show = val
      })
    }
    vm.$on('cancel', _ => reject('cancel'))
    vm.$on('confirm', _ =>
      resolve(() => {
        vm.show = false
      })
    )
  })
}

Component.modal = (msg, opts = {}) => handler(msg, { type: 'alert', ...opts })
Component.alert = (msg, opts = {}) => handler(msg, { ...opts, type: 'alert' })
Component.confirm = (msg, opts = {}) => handler(msg, { ...opts, type: 'confirm' })

Component.install = function(Vue) {
  Vue.prototype.$modal = this.modal
  Vue.prototype.$modal.alert = this.alert
  Vue.prototype.$modal.confirm = this.confirm

  Vue.component(Component.name, Component)
}

export default Component

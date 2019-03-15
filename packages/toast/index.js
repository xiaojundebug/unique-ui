import Toast from './src'

let vm = null
let timer = null

const defaultOptions = {
  position: 'bottom',
  duration: 2500
}

let options = null

// 清除 vm、dom、timer
function clear() {
  try {
    clearTimeout(timer)
    document.body.removeChild(vm.$el)
    vm.$destroy()
    vm = null
  } catch (error) {}
}

export default {
  install(Vue, globalOptions) {
    options = Object.assign(defaultOptions, globalOptions)
    const Component = Vue.extend(Toast)

    Vue.prototype.$toast = (msg, opts = {}) => {
      const { position = options.position, duration = options.duration } = opts

      if (vm) clear()

      vm = new Component()
      document.body.appendChild(vm.$mount().$el)

      vm.show = true
      vm.msg = msg
      vm.position = position

      timer = setTimeout(() => {
        vm.show = false
      }, duration - 600)
    }
    ;['bottom', 'center', 'top'].forEach(position => {
      Vue.prototype.$toast[position] = msg => Vue.prototype.$toast(msg, { position })
    })
  }
}

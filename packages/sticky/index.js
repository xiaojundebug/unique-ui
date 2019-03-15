import Component from './src'

Component.install = function(Vue) {
  Vue.component(Component.name, Component)
}

export default Component

import Vue from 'vue'
import App from './app_mobile'
import VueRouter from 'vue-router'
import routes from './router'
import 'packages/theme/src/index.scss'
import uniqueUI from 'src'
import DemoBlock from './components/demo-block.vue'
import VueProgressBar from 'vue-progressbar'
import './utils/touch-simulator'

Vue.component(DemoBlock.name, DemoBlock)

Vue.use(VueRouter)
Vue.use(uniqueUI)
Vue.use(VueProgressBar, {
  color: '#8d8f91',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  }
})

const router = new VueRouter({
  mode: 'hash',
  routes: routes(true)
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start()
  next()
})

router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
  if (!router.currentRoute.redirectedFrom) {
    window.scrollTo(0, 0)
    Vue.nextTick(window.syncPath)
  }
})

window.vueRouter = router

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

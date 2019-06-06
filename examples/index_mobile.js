import Vue from 'vue'
import App from './app_mobile'
import VueRouter from 'vue-router'
import routes from './router'
import 'packages/theme/src/index.scss'
import uniqueUI from 'src'
import DemoBlock from './components/demo-block.vue'
import VueProgressBar from 'vue-progressbar'
import { isMobile } from './utils'

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

if (!isMobile) {
  import('./utils/touch-simulator')

  // const touchPointEl = document.querySelector('.touch-point')
  // const { style } = touchPointEl

  // function correctPosition(ev) {
  //   const { clientX, clientY } = ev
  //   style.top = clientY - touchPointEl.offsetWidth / 2 + 'px'
  //   style.left = clientX - touchPointEl.offsetWidth / 2 + 'px'
  // }

  // function onMousedown(ev) {
  //   style.opacity = '0.3'
  //   correctPosition(ev)
  //   window.addEventListener('mousemove', onMousemove, true)
  // }

  // function onMousemove(ev) {
  //   style.opacity = '0.3'
  //   correctPosition(ev)
  // }

  // function onMouseup(ev) {
  //   style.opacity = '0'
  //   window.removeEventListener('mousemove', onMousemove, true)
  // }

  // window.addEventListener('mousedown', onMousedown, true)
  // window.addEventListener('mouseup', onMouseup, true)
}

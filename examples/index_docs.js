import Vue from 'vue'
import App from './app_docs'
import VueRouter from 'vue-router'
import routes from './router'
import 'highlight.js/styles/atom-one-dark.css'
import './assets/styles/global.scss'
import './assets/styles/docs.scss'
import { isMobile } from './utils'
import VueProgressBar from 'vue-progressbar'

Vue.use(VueRouter)
Vue.use(VueProgressBar, {
  color: "#ffa683",
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  }
})

const router = new VueRouter({
  mode: 'hash',
  routes: routes(false)
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start()
  if (isMobile) {
    location.replace('mobile.html' + location.hash)
  }
  next()
})

router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
  window.scrollTo(0, 0)
  Vue.nextTick(window.syncPath)
})

window.vueRouter = router

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

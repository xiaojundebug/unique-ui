import Vue from 'vue'
import Component from './overlay' // 引入 overlay 组件
const O = Vue.extend(Component)
let overlayVM = null

let zIndex = 1000
const getZIndex = function() {
  return zIndex++
}

const Overlay = {
  instances: [],
  // 打开遮罩层
  open(instance) {
    if (!instance || this.instances.indexOf(instance) !== -1) return
    if (!overlayVM) {
      // 当没有遮盖层时，新建遮盖层
      this.createOverlay()
    }
    // 禁止页面滚动
    this.bodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // 设置内容的z-index
    instance.$el.style.zIndex = getZIndex()
    overlayVM.color = instance.overlayColor
    overlayVM.opacity = instance.overlayOpacity
    overlayVM.show = true

    this.instances.push(instance)
  },
  // 关闭遮罩层
  close(instance) {
    const index = this.instances.indexOf(instance)
    if (index === -1) return

    Vue.nextTick(() => {
      this.instances.splice(index, 1)

      // 当页面上没有弹出层了就关闭遮盖层
      if (this.instances.length === 0) {
        this.closeOverlay()
      }
    })
  },
  createOverlay() {
    overlayVM = new O()
    overlayVM.onClick = this.handleOverlayClick.bind(this)
    document.body.appendChild(overlayVM.$mount().$el)
    // 设置遮罩层z-index
    overlayVM.$el.style.zIndex = getZIndex()
  },
  // 关闭遮罩层
  closeOverlay() {
    if (!overlayVM) return
    document.body.style.overflow = this.bodyOverflow
    overlayVM.show = false
  },
  // 处理遮罩层点击事件
  handleOverlayClick() {
    if (this.instances.length === 0) return
    const instance = this.instances[this.instances.length - 1]
    const { handleOverlayClick } = instance
    if (handleOverlayClick && typeof handleOverlayClick === 'function') {
      handleOverlayClick()
    }
  }
}

export default Overlay

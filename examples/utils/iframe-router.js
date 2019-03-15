/**
 * 同步父窗口和 iframe 的 vue-router 状态
 */

import { iframeReady, isMobile } from './'

window.syncPath = function() {
  const router = window.vueRouter
  const isInIframe = window !== window.top
  const currPath = router.history.current.path

  if (!isInIframe && !isMobile) {
    const iframe = document.querySelector('iframe')
    if (iframe) {
      iframeReady(iframe, () => {
        iframe.contentWindow.changePath(currPath)
      })
    }
  } else if (isInIframe) {
    window.top.changePath(currPath)
  }
}

window.changePath = function(path = '') {
  window.vueRouter.replace(path)
}

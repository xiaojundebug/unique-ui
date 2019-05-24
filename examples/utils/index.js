function iframeReady(iframe, callback) {
  const doc = iframe.contentWindow.document
  const interval = () => {
    if (iframe.contentWindow.changePath) {
      callback()
    } else {
      setTimeout(() => {
        interval()
      }, 50)
    }
  }

  if (doc.readyState === 'complete') {
    interval()
  } else {
    iframe.onload = interval
  }
}

const ua = navigator.userAgent.toLowerCase()
const isMobile = /ios|iphone|ipod|ipad|android/.test(ua)
const randNum = (a = 0, b) => a + Math.round(Math.random() * (b - a))

export { isMobile, iframeReady, randNum }

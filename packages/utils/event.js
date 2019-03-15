// Test via a getter in the options object to see
// if the passive property is accessed
var supportsPassive = false
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true
    }
  })
  window.addEventListener('test', null, opts)
} catch (e) {}

function on(elem, event, handler, passive = false) {
  elem.addEventListener(event, handler, supportsPassive ? { passive } : false)
}

function off(elem, event, handler) {
  elem.removeEventListener(event, handler)
}

export {
  on,
  off
}

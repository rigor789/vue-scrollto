// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
let supportsPassive = false
try {
  let opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true
    },
  })
  window.addEventListener('test', null, opts)
} catch (e) {}

export default {
  $(selector) {
    if (typeof selector !== 'string') {
      return selector
    }
    return document.querySelector(selector)
  },
  on(element, events, handler, opts = { passive: false }) {
    if (!(events instanceof Array)) {
      events = [events]
    }
    for (let i = 0; i < events.length; i++) {
      element.addEventListener(
        events[i],
        handler,
        supportsPassive ? opts : false
      )
    }
  },
  off(element, events, handler) {
    if (!(events instanceof Array)) {
      events = [events]
    }
    for (let i = 0; i < events.length; i++) {
      element.removeEventListener(events[i], handler)
    }
  },
  cumulativeOffset(element) {
    let top = 0
    let left = 0

    do {
      top += element.offsetTop || 0
      left += element.offsetLeft || 0
      element = element.offsetParent
    } while (element)

    return {
      top: top,
      left: left,
    }
  },
}

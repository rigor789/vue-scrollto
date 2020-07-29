import VueScrollTo from './directive'
import { setDefaults, scroller } from './scrollTo'

const install = function(Vue, options) {
  if (options) setDefaults(options)
  Vue.directive('scroll-to', VueScrollTo)
  Vue.prototype.$scrollTo = VueScrollTo.scrollTo
}

if (typeof window !== 'undefined' && window.Vue) {
  window.VueScrollTo = VueScrollTo
  window.VueScrollTo.setDefaults = setDefaults
  window.VueScrollTo.scroller = scroller
  window.Vue.use(install)
}

VueScrollTo.install = install
export default VueScrollTo

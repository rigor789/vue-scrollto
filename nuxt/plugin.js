import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, <%= serialize(options) %>)

export default function (ctx, inject) {
    inject('scrollTo', VueScrollTo.scrollTo)
}

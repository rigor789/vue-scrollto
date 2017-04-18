import VueScrollTo from "./directive";

const install = function(Vue) {
    Vue.directive("scroll-to", VueScrollTo);
    Vue.prototype.$scrollTo = VueScrollTo.scrollTo;
};

if (typeof window !== "undefined" && window.Vue) {
    window.VueScrollTo = VueScrollTo;
    Vue.use(install);
}

VueScrollTo.install = install;
export default VueScrollTo;

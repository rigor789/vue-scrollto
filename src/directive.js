import scrollTo from "./scrollTo";
import _ from "./utils";

function handleClick(e) {
    e.preventDefault();

    if (typeof this.value === "string") {
        return scrollTo(this.value);
    }
    scrollTo(this.value.el || this.value.element, this.value);
}

export default {
    bind(el, binding) {
        _.on(el, "click", handleClick.bind(binding));
    },
    unbind(el) {
        _.off(el, "click", handleClick);
    },
    scrollTo
};

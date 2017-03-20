import scrollTo from "./scrollTo";
import _ from "./utils";

const bindings = {}; // store binding data

function handleClick(e) {
    e.preventDefault();
    let ctx = bindings[this];

    if (typeof ctx.value === "string") {
        return scrollTo(ctx.value);
    }
    scrollTo(ctx.value.el || ctx.value.element, ctx.value);
}

export default {
    bind(el, binding) {
        bindings[el] = binding;
        _.on(el, "click", handleClick);
    },
    unbind(el) {
        delete bindings[el];
        _.off(el, "click", handleClick);
    },
    update(el, binding) {
        bindings[el] = binding;
    },
    scrollTo
};

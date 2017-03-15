"use strict";

var BezierEasing = require("bezier-easing");

var _ = exports.utils = {
    $: function(selector) {
        return document.querySelector(selector);
    },
    on: function(element, events, handler) {
        if (!(events instanceof Array)) {
            events = [events];
        }
        for (var i = 0; i < events.length; i++) {
            element.addEventListener(events[i], handler);
        }
    },
    off: function(element, events, handler) {
        if (!(events instanceof Array)) {
            events = [events];
        }
        for (var i = 0; i < events.length; i++) {
            element.removeEventListener(events[i], handler);
        }
    },
    cumulativeOffset: function(element) {
        var top = 0;

        do {
            top += element.offsetTop || 0;
            element = element.offsetParent;
        } while (element);

        return {
            top: top
        };
    }
};

exports.install = function(Vue) {
    function handleClick(e) {
        e.preventDefault();

        if (typeof this.value === "object") {
            exports.scrollTo(
                this.value.el || this.value.element,
                this.value.duration || 500,
                {
                    easing: (typeof this.value.easing === "string"
                        ? exports.easing[this.value.easing]
                        : this.value.easing) ||
                        exports.easing["ease"],
                    offset: this.value.offset || 0,
                    container: this.value.container || "body",
                    onDone: this.value.onDone,
                    onCancel: this.value.onCancel
                }
            );
        } else {
            exports.scrollTo(this.value, 500, {
                easing: exports.easing["ease"]
            });
        }
    }

    Vue.directive("scroll-to", {
        bind: function(el, binding) {
            _.on(el, "click", handleClick.bind(binding));
        },
        unbind: function(el) {
            _.off(el, "click", handleClick);
        }
    });
};

exports.scrollTo = function(element, duration, options) {
    if (typeof element === "string") {
        element = _.$(element);
    }

    var container = _.$(options.container || "body");
    var events = [
        "mousedown",
        "wheel",
        "DOMMouseScroll",
        "mousewheel",
        "keyup",
        "touchmove"
    ];
    var abort = false;

    var abortFn = function() {
        abort = true;
    };

    _.on(container, events, abortFn);

    var elementOffsetTop = _.cumulativeOffset(element).top;
    var initialY = container.scrollTop;

    if (container.tagName.toLowerCase() === "body") {
        // in firefox body.scrollTop always returns 0
        // thus if we are trying to get scrollTop on a body tag
        // we need to get it from the documentElement
        initialY = initialY || document.documentElement.scrollTop;
    }

    var elementY = elementOffsetTop - container.offsetTop;
    var targetY = elementY;

    if (options.offset) {
        targetY += options.offset;
    }

    var diff = targetY - initialY;
    var easing = BezierEasing.apply(BezierEasing, options.easing);
    var start;

    var done = function() {
        _.off(container, events, abortFn);
        if (abort && options.onCancel) options.onCancel();
        if (!abort && options.onDone) options.onDone();
    };

    if (!diff) return;

    window.requestAnimationFrame(function step(timestamp) {
        if (abort) return done();
        if (!start) start = timestamp;

        var time = timestamp - start;
        var progress = Math.min(time / duration, 1);
        progress = easing(progress);

        container.scrollTop = initialY + diff * progress;
        if (container.tagName.toLowerCase() === "body") {
            // in firefox body.scrollTop doesn't scroll the page
            // thus if we are trying to scrollTop on a body tag
            // we need to scroll on the documentElement
            document.documentElement.scrollTop = initialY + diff * progress;
        }

        if (time < duration) {
            window.requestAnimationFrame(step);
        } else {
            done();
        }
    });
};

exports.easing = {
    ease: [0.25, 0.1, 0.25, 1.0],
    linear: [0.00, 0.0, 1.00, 1.0],
    "ease-in": [0.42, 0.0, 1.00, 1.0],
    "ease-out": [0.00, 0.0, 0.58, 1.0],
    "ease-in-out": [0.42, 0.0, 0.58, 1.0]
};

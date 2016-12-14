'use strict'

var $ = require('jquery')
var BezierEasing = require('bezier-easing')

var _ = exports.utils = {
    $: function (selector) {
        return document.querySelector(selector)
    },
    on: function (element, events, handler) {
        if (!(events instanceof Array)) {
            events = [events]
        }
        for (var i = 0; i < events.length; i++) {
            element.addEventListener(events[i], handler)
        }
    },
    off: function (element, events, handler) {
        if (!(events instanceof Array)) {
            events = [events]
        }
        for (var i = 0; i < events.length; i++) {
            element.removeEventListener(events[i], handler)
        }
    }
}

exports.install = function (Vue) {
    function handleClick(e) {
        e.preventDefault()

        exports.scrollTo(this.value, 500, {
            easing: exports.easing['ease']
        })
    }


    Vue.directive('scroll-to', {
        bind: function (el, binding) {
            _.on(el, 'click', handleClick.bind(binding))
        },
        unbind: function (el) {
            _.off(el, 'click', handleClick)
        }
    })
}

exports.scrollTo = function (element, duration, options) {
    var page = _.$('html, body')
    var events = ['scroll', 'mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove']
    var abort = false

    var abortFn = function () {
        abort = true
    }

    _.on(page, events, abortFn)

    var initialY = window.pageYOffset
    var elementY = initialY + _.$(element).getBoundingClientRect().top
    var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
    var diff = targetY - initialY
    var easing = BezierEasing.apply(BezierEasing, options.easing)
    var start

    var done = function () {
        _.off(page, events, abortFn)
    }

    if (!diff) return

    window.requestAnimationFrame(function step(timestamp) {
        if (abort) return
        if (!start) start = timestamp

        var time = timestamp - start
        var progress = Math.min(time / duration, 1)
        progress = easing(progress)

        window.scrollTo(0, initialY + diff * progress)

        if (time < duration) {
            window.requestAnimationFrame(step)
        } else {
            done()
        }
    })
}

exports.easing = {
    'ease': [0.25, 0.1, 0.25, 1.0],
    'linear': [0.00, 0.0, 1.00, 1.0],
    'ease-in': [0.42, 0.0, 1.00, 1.0],
    'ease-out': [0.00, 0.0, 0.58, 1.0],
    'ease-in-out': [0.42, 0.0, 0.58, 1.0]
}
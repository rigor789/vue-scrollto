'use strict';

var $ = require('jquery')

exports.install = function(Vue) {
  function handleClick(e) {
    e.preventDefault()
    var page = $('html, body')
    var events = 'scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove'
    page.on(events, function() {
      page.stop()
    });

    page.animate({
      scrollTop: $(this.value).offset().top + 'px'
    }, 300, function() {
      page.off(events)
    })
  }


  Vue.directive('scroll-to', {
    bind: function(el, binding) {
      el.addEventListener('click', handleClick.bind(binding))
    },
    unbind: function(el) {
      el.removeEventListener('click', handleClick)
    }
  })
}

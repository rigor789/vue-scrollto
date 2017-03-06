# vue-scrollto
[![npm](https://img.shields.io/npm/v/vue-scrollto.svg)](https://www.npmjs.com/package/vue-scrollto)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/rigor789/vue-scrollto/blob/master/LICENSE)

[DEMO](https://rigor789.github.io/vue-scrollto/)

This is a [Vue.js](https://github.com/vuejs/vue) directive that
can scroll to elements on the page.

Since `v2.1.0` it doesn't require `jQuery` anymore, instead it uses
`window.requestAnimationFrame` and 
[bezier-easing](https://github.com/gre/bezier-easing) for easing.
 
The package exposes some functions that you can use [programatically](#programatically). 

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install vue-scrollto --save
```
*Note*: The package used to be named `vue-scrollTo` with a capital T, but due to limited support for mixed case in npm, it has been renamed to a lowercase name.
## Usage

### As a directive
```js
var Vue = require('vue');
var vueScrollto = require('vue-scrollto');
Vue.use(vueScrollto);
```

```html
<a href="#" v-scroll-to="'#element'">Scroll to #element</a>

<div id="element">
    Hi. I'm element.
</div>
```

You can also use an object literal to pass in options:

```html
<a href="#" v-scroll-to="{ el: '#element', duration: 500, easing: 'linear', offset: -200, onDone: onDone, onCancel: onCancel}">
    Scroll to #element
</a>
```

*Note on easing:* you can use the [easings included](#customize-easing), or you can specify your own in the form of `easing: [.6, -.80, .30, 1.9]`

### Programatically

```js
var vueScrollto = require('vue-scrollto');

var options = {
    easing: vueScrollto.easing['ease-in'],
    offset: -60,
    onDone: function() {
      // scrolling is done
    },
    onCancel: function() {
      // scrolling has been interrupted
    }
}

vueScrollto.scrollTo(element, duration, options)
```

#### Customize easing

Easing is done with [bezier-easing](https://github.com/gre/bezier-easing)
so you can pass your own values into
`options.easing`. It expects an array with exactly 4 values.

Here are the easings included by default: 
```js
exports.easing = {
    'ease': [0.25, 0.1, 0.25, 1.0],
    'linear': [0.00, 0.0, 1.00, 1.0],
    'ease-in': [0.42, 0.0, 1.00, 1.0],
    'ease-out': [0.00, 0.0, 0.58, 1.0],
    'ease-in-out': [0.42, 0.0, 0.58, 1.0]
}
```

## License

MIT

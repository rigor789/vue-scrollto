# vue-scrollTo
[![npm](https://img.shields.io/npm/v/vue-scrollTo.svg)](https://www.npmjs.com/package/vue-scrollTo)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/rigor789/vue-scrollTo/blob/master/LICENSE)

This is a [Vue.js](https://github.com/vuejs/vue) directive that
can scroll to elements on the page.

Since `v2.1.0` it doesn't require `jQuery` anymore, instead it uses
`window.requestAnimationFrame` and 
[bezier-easing](https://github.com/gre/bezier-easing) for easing.
 
The package exposes some functions that you can use [programatically](#programatically). 

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install vue-scrollTo --save
```

## Usage

### As a directive
```js
var Vue = require('vue');
var vueScrollTo = require('vue-scrollTo');
Vue.use(vueScrollTo);
```

```html
<a href="#" v-scroll-to="'#element'">Scroll to #element</a>

<div id="element">
    Hi. I'm element.
</div>
```

### Programatically

```js
var vueScrollTo = require('vue-scrollTo');

var options = {
    easing: vueScrollTo.easing['ease-in'],
    offset: -60
}

vueScrollTo.scrollTo(element, duration, options)
```

#### Custimize easing

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

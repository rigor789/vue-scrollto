# vue-scrollto

[![Vue 2.x](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/v2/guide/)
[![npm](https://img.shields.io/npm/v/vue-scrollto.svg)](https://www.npmjs.com/package/vue-scrollto)
[![npm-downloads](https://img.shields.io/npm/dm/vue-scrollto.svg)](https://www.npmjs.com/package/vue-scrollto)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/rigor789/vue-scrollto/blob/master/LICENSE)

[DEMO](https://rigor789.github.io/vue-scrollto/#/examples)

Scrolling to elements was never this easy!

This is for `vue 2.x`

For `vue 1.x` use `vue-scrollTo@1.0.1` (note the capital T) but keep in mind that the old version depends on `jquery`.

## Under the hood

`vue-scrollto` uses `window.requestAnimationFrame` to perform the animations, thus giving the best performance.

Easing is done using [bezier-easing](https://github.com/gre/bezier-easing) - A well tested easing micro-library.

<p class="tip">
It even knows when the user interrupts, and doesn't force scrolling that would result in bad UX.
</p>

## Installing

This package is available on npm.

<p class="warning">
    If you used this package before, please ensure you are using the right one, since it has been renamed from `vue-scrollTo` to `vue-scrollto`
</p>

Using npm:
```bash
npm install --save vue-scrollto
```

Using yarn:
```bash
yarn add vue-scrollto
```

Directly include it in html:
```html
<script src="https://unpkg.com/vue@2.2.4"></script>
<script src="https://unpkg.com/vue-scrollto"></script>
```
<p class="tip">
    When including it in html, it will automatically call `Vue.use` and also set a `VueScrollTo` variable that you can use!
</p>


## Usage

vue-scrollto can be used either as a vue directive, or programatically from your javascript.

### As a vue directive
```js
var Vue = require('vue');
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })
```

In case you are using the browser version (directly including the script on your page), you can set the defaults with
 
```js
VueScrollTo.setDefaults({
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
```

```html
<a href="#" v-scroll-to="'#element'">Scroll to #element</a>

<div id="element">
    Hi. I'm #element.
</div>
```

If you need to customize the scrolling options, you can pass in an object literal to the directive:

```html
<a href="#" v-scroll-to="{
     el: '#element',
     container: '#container',
     duration: 500,
     easing: 'linear',
     offset: -200,
     cancelable: true
     onStart: onStart,
     onDone: onDone,
     onCancel: onCancel,
     x: false,
     y: true
 }">
    Scroll to #element
</a>
```

<p class="tip">
    Check out the Options section for more details about the available options.
</p>

### Programatically

```js
var VueScrollTo = require('vue-scrollto');

var options = {
    container: '#container',
    easing: 'ease-in',
    offset: -60,
    cancelable: true,
    onStart: function(element) {
      // scrolling started
    },
    onDone: function(element) {
      // scrolling is done
    },
    onCancel: function() {
      // scrolling has been interrupted
    },
    x: false,
    y: true
}

var cancelScroll = VueScrollTo.scrollTo(element, duration, options)

// or alternatively inside your components you can use
cancelScroll = this.$scrollTo(element, duration, options)

// to cancel scrolling you can call the returned function
cancelScroll()
```

## Options

#### el / element 
The element you want to scroll to.

#### container
The container that has to be scrolled. 

*Default:* `body`

#### duration
The duration (in milliseconds) of the scrolling animation. 

*Default:* `500` 

#### easing 
The easing to be used when animating. Read more in the [Easing section](#easing-detailed). 

*Default:* `ease`

#### offset 
The offset that should be applied when scrolling. This option accepts a callback function since `v2.8.0`. 

*Default:* `0`

#### cancelable
Indicates if user can cancel the scroll or not.

*Default:* `true`

#### onStart
A callback function that should be called when scrolling has started. Receives the target element as a parameter.

*Default:* `noop`

#### onDone 
A callback function that should be called when scrolling has ended. Receives the target element as a parameter.

*Default:* `noop`

#### onCancel 
A callback function that should be called when scrolling has been aborted by the user (user scrolled, clicked etc.). Receives the abort event and the target element as parameters.
 
*Default:* `noop`

#### x 
Whether or not we want scrolling on the `x` axis
 
*Default:* `false`

#### y 
Whether or not we want scrolling on the `y` axis
 
*Default:* `true`


<h2 id="easing-detailed">Easing</h2>

Easing is calculated using [bezier-easing](https://github.com/gre/bezier-easing) so you can pass your own values into `options.easing` in the form of an array with 4 values, or you can use any of the default easings by referencing their names as strings (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`).

vue-scrollto uses the following values for the default easings:
```js
let easings = {
    'ease': [0.25, 0.1, 0.25, 1.0],
    'linear': [0.00, 0.0, 1.00, 1.0],
    'ease-in': [0.42, 0.0, 1.00, 1.0],
    'ease-out': [0.00, 0.0, 0.58, 1.0],
    'ease-in-out': [0.42, 0.0, 0.58, 1.0]
}
```

## Simultaneous Scrolling

If you need to scroll multiple containers simultaneously, you can import the scroller factory directly and create multiple instances. (Using the default `scrollTo` methods allows for only one scroll action at a time for performance reasons.)

```js
import {scroller} from 'vue-scrollto/src/scrollTo'
const firstScrollTo = scroller()
const secondScrollTo = scroller()
firstScrollTo('#el1')
secondScrollTo('#el2')
```

## License

MIT

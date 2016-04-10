# vue-scrollTo

[Vue.js](https://github.com/vuejs/vue) directive.  
Adds a directive that listens for click events and scrolls to elements.

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install vue-scrollTo --save
```

## Usage

```js
var Vue = require('vue');
var vueScrollTo = require('vue-scrollTo');
Vue.use(vueScrollTo);
```

```html
<a href="#" v-scroll-to=".element">Scroll to .element</a>

<div class="element">
    Hi. I'm element.
</div>
```

## Info

Currently depends on jQuery, I would like to remove the dependency eventually.

## License

MIT

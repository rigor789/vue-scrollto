# Examples

Here are some examples of `vue-scrollto`!

Every example assumes you have installed `vue-scrollto`:
```js
const Vue = require('vue')
const VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)
```

## Using string literals

```html
<button v-scroll-to="'#element'">
    Scroll to #element
</button>

<h1 id="element">Hi. I'm element</h1>
```

<iframe width="100%"
        height="300"
        src="//jsfiddle.net/rigor789/egh95a0q/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>

## Using object literals

```html
<button v-scroll-to="{ el: '#element' }">
    Scroll to #element
</button>
```
or
```html
<button v-scroll-to="{ element: '#element' }">
    Scroll to #element
</button>
```

<iframe width="100%"
        height="300"
        src="//jsfiddle.net/rigor789/efs4s9wa/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>


#### Using a different duration

```html
<button v-scroll-to="{ element: '#element', duration: 5000 }">
    Scroll to #element
</button>
```

<iframe width="100%"
        height="300"
        src="//jsfiddle.net/rigor789/jcjc4mxs/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>

#### Using a different easing

```html
<button v-scroll-to="{ element: '#element', easing: 'linear' }">
    Scroll to #element
</button>
```

<iframe width="100%"
        height="300"
        src="//jsfiddle.net/rigor789/fhnb6gmh/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>

#### Using custom easing combined with duration

```html
<button v-scroll-to="{
        el: '#element',
        easing: [.6, .80, .30, 1.9],
        duration: 2000
    }">
    Scroll to #element
</button>
```

<iframe width="100%"
        height="300"
        src="//jsfiddle.net/rigor789/7xvxm7s9/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>

#### Using offset

```html
<button v-scroll-to="{ el: '#element', offset: 200 }">
    Scroll to 200px below #element
</button>
```

<iframe width="100%"
        height="300"
        src="//jsfiddle.net/rigor789/dmnmcpwj/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>


#### Adding callbacks
```html
<button v-scroll-to="{
        el: '#element',
        onDone: onDone,
        onCancel: onCancel
    }">
    Scroll callbacks
</button>
```

```js
export default {
    methods: {
        onDone() {
            alert('done')
        },

        onCancel() {
            alert('canceled')
            console.log(e)
        }
    }
}
```

<iframe width="100%"
        height="300"
        src="//jsfiddle.net/rigor789/2mfg8tda/embedded/result,html,js,css,resources"
        allowfullscreen="allowfullscreen"
        frameborder="0">
</iframe>

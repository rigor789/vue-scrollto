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

#### Using a different duration

```html
<button v-scroll-to="{ element: '#element', duration: 5000 }">
    Scroll to #element
</button>
```

#### Using a different easing

```html
<button v-scroll-to="{ element: '#element', easing: 'linear' }">
    Scroll to #element
</button>
```

#### Using custom easing combined with duration

```html
<button v-scroll-to="{ 
        el: '#element',
        easing: [.6, -.80, .30, 1.9],
        duration: 2000 
    }">
    Scroll to #element
</button>
```

#### Using offset

```html
<button v-scroll-to="{ el: '#element', offset: 200 }">
    Scroll to 200px below #element 
</button>
```

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
            // do something
        },
        
        onCancel() {
            // do something
        }
    }
}
```

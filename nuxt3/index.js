import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineNuxtModule, addPlugin } from '@nuxt/kit';

const __dirname = dirname(fileURLToPath(import.meta.url));

/*
Directives will be ignored by Vue in SSR. However the v-scroll-to directive
needs to exist in the SSR context or an error will occur: `Cannot read
properties of undefined (reading 'getSSRProps')`. Make sure to enable this
plugin for SSR and Vue will just ignore the directive when rendered server side.
Remove `.client` from the filename and remove `mode: 'client'` inside
nuxt.config.js

https://vuejs.org/guide/scaling-up/ssr.html#custom-directives
https://github.com/nuxt/framework/issues/3154
https://github.com/nuxt/framework/issues/6570
*/


export default defineNuxtModule({
  meta: {
    name: 'vue-scrollto',
    configKey: 'scrollto',
    compatibility: {
      nuxt: '^3.0.0-rc.11',
    },
  },
  defaults: {},
  hooks: {},
  setup(options, nuxt) {
    addPlugin({
      mode: 'all',
      src: resolve(__dirname, 'plugin.js'),
      // fileName: 'vue-scrollto.js',
      // options,
    });
  },
});

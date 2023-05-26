import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'vue-scrollto',
  description: 'Scrolling to elements made easy.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Docs', link: '/docs/' },
      { text: 'Examples', link: '/examples/' },
      { text: 'Changelog', link: '/changelog/' },
    ],

    outline: 'deep',

    editLink: {
      pattern:
        'https://github.com/rigor789/vue-scrollto/tree/master/docs/:path',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rigor789/vue-scrollto' },
    ],
  },
})

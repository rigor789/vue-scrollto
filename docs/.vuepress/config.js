module.exports = {
    title: 'vue-scrollto',
    description: 'Adds a directive that listens for click events and scrolls to elements.',
    themeConfig: {
        repo: 'rigor789/vue-scrollto',
        docsDir: 'docs',
        editLinks: true,
        search: false,
        nav: [
            { text: 'Docs', link: '/docs/'},
            { text: 'Examples', link: '/examples/'},
            { text: 'Changelog', link: '/changelog/'},
        ]
    },
    plugins: [
        '@vuepress/google-analytics',
        {
            'ga': 'UA-93972714-1'
        }
    ]
}

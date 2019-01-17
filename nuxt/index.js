const { resolve } = require('path')

module.exports = function nuxtVueScrollTo(moduleOptions) {
    const options = Object.assign({}, this.options.scrollTo, moduleOptions)

    this.addPlugin({
        ssr: false,
        src: resolve(__dirname, 'plugin.js'),
        fileName: 'vue-scrollto.js',
        options
    })
}

module.exports.meta = require('../package.json')

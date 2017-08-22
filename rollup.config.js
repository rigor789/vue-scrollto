import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    entry: './src/index.js',
    dest: 'vue-scrollto.js',

    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['es2015-rollup'],
            plugins: ['transform-object-assign']
        })
    ],

    format: 'umd',
    moduleName: 'vue-scrollto'
}

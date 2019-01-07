import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
    input: './src/index.js',
    output: {
        file: 'vue-scrollto.js',
        name: 'vue-scrollto',
        format: 'umd',
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env'],
            plugins: ['@babel/transform-object-assign']
        })
    ],
}

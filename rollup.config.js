import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

import {version} from './package.json'

export default {
    input: './src/index.js',
    output: {
        file: 'vue-scrollto.js',
        name: 'vue-scrollto',
        format: 'umd',
        banner: `/*!
  * vue-scrollto v${version}
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */`,
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env'],
            plugins: ['@babel/transform-object-assign'],
        }),
    ],
}

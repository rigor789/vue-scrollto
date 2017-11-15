## v2.8.0 (2017-11-15)
- Allow a callback in offset option (#61)

## v2.7.10 (2017-11-8)
- Fixed default value being ignored for cancelable when not explicitly set

## v2.7.9 (2017-10-30)
- Fixed scrolling in relative containers (#57)

## v2.7.8 (2017-9-21)
- Fixed passive event listeners

## v2.7.6 (2017-9-6)
- Pushed the intended change for v2.7.6

## v2.7.6 (2017-9-6)
- Fixed x and y axes being switched up.

## v2.7.5 (2017-8-28)
- Add a way to cancel scrolling programmatically (#46)

## v2.7.4 (2017-8-22)
- transform Object.assign to support IE11 (issue: #37 pr: #40)

## v2.7.3 (2017-8-22)
- Disable horizontal scroll by default (#39)

## v2.7.2 (2017-7-9)
- Added support for older browsers, by not using `.find()`. (#33)

## v2.7.1 (2017-7-8)
- Fixed setting `cancelable` to false being ignored

## v2.7.0 (2017-6-22)
- Added horizontal scroll support (#31) 

## v2.6.10 (2017-6-21)
- Made cancel events listener passive 

## v2.6.9 (2017-6-18)
- Added cancelable option

## v2.6.8 (2017-5-6)
- Added default options setting.
- Fixed documentation,

## v2.6.7 (2017-4-18)
- Added SSR support.

## v2.6.6 (2017-4-11)
- Updated documentation for programmatic usage and easings.

## v2.6.5 (2017-4-8)
- Added warnings when scrolling to elements that don't exist.

## v2.6.4 (2017-3-22)
- Fixed #15 - elements would share their bindings

## v2.6.3 (2017-3-20)
- Added update to directive declaration, so options can be changed dynamically.

## v2.6.2 (2017-3-18)
- Pushed updated docs to npm

## [v2.6.1](https://github.com/rigor789/vue-scrollto/commit/8b97dac5349546bef24e836787653a6124509a83) (2017-3-18)

### Fixes
- Removed accidental `console.log`

## [v2.6.0](https://github.com/rigor789/vue-scrollto/commit/c68fdd2632680fd78876047ea087ca7cbe9ae3c5) (2017-3-18)

### Changes
- Cleaned up repository
- Added rollup
- Added better docs

## [v2.5.4](https://github.com/rigor789/vue-scrollto/commit/919eb807bae8bf6eb201462d4f9923f7bc6c56b5) (2017-3-15)

### Bug fixes
- Fixed jumping to the top of the page in firefox when scrolling on the `body` tag. [6f5615e](https://github.com/rigor789/vue-scrollto/commit/6f5615ebe8602bf766e1401d33c6b1c24a961db2)
    
## [v2.5.3](https://github.com/rigor789/vue-scrollto/commit/1b6ee1380401545897f7403a720d75d97665c219) (2017-3-14)

### Additions
- Added calculations for scrolling inside positioned elements. [7f730e8](https://github.com/rigor789/vue-scrollto/commit/7f730e82cbe0d585aa7ebd783eaf9761bc4add28)
    
## [v2.5.2](https://github.com/rigor789/vue-scrollto/commit/d5aaf39b5c3584f40b298d1279d2a94a4dd9c940) (2017-3-14)

### Bug fixes
- Fixed firefox not scrolling on `body` tag. [575d90a](https://github.com/rigor789/vue-scrollto/commit/575d90ab3d60ae6fec9027fea1f72a3ffacd440b)

## [v2.5.1](https://github.com/rigor789/vue-scrollto/commit/e0970507d51529583e237aa4c69dcede4896af73) (2017-3-14)

### Additions
- Added examples for using the `container` option

## [v2.5.0](https://github.com/rigor789/vue-scrollto/commit/7abe2bb111964f173b003208c0f28eb3b6e209fd) (2017-3-14)

### Additions
- Added `container` option to allow scrolling inside different containers

## [v2.4.2](https://github.com/rigor789/vue-scrollto/commit/aa1cca9afc95adce564fbd976eca369aaa704917) (2017-3-6)

### Changes
- Updated the repository link in `package.json`

## [v2.4.1](https://github.com/rigor789/vue-scrollto/commit/bdbc6409c72ba0217348aa4cc5d9c93df9441a30) (2017-3-6)

### Changes
- Renamed package from `vue-scrollTo` to `vue-scrollto` due to npm's limited support for capital letters in package names.

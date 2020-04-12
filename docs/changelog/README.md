# [2.18.0](https://github.com/rigor789/vue-scrollto/compare/v2.17.1...v2.18.0) (2020-04-12)


### Features

* ignore clicks if directive value is falsy ([#243](https://github.com/rigor789/vue-scrollto/issues/243)) ([adaac9c](https://github.com/rigor789/vue-scrollto/commit/adaac9c56492451206bbb35797dc3f4fdb4f9a53)), closes [#242](https://github.com/rigor789/vue-scrollto/issues/242)

## [2.17.1](https://github.com/rigor789/vue-scrollto/compare/v2.17.0...v2.17.1) (2019-09-17)


### Bug Fixes

* improved type definitions ([#160](https://github.com/rigor789/vue-scrollto/issues/160)) ([f6a6596](https://github.com/rigor789/vue-scrollto/commit/f6a6596))

# [2.17.0](https://github.com/rigor789/vue-scrollto/compare/v2.16.3...v2.17.0) (2019-09-16)


### Features

* add typescript bindings ([#159](https://github.com/rigor789/vue-scrollto/issues/159)) ([1b39aaf](https://github.com/rigor789/vue-scrollto/commit/1b39aaf))

## [2.16.3](https://github.com/rigor789/vue-scrollto/compare/v2.16.2...v2.16.3) (2019-09-10)


### Bug Fixes

* only call onDone if it's defined ([55afb50](https://github.com/rigor789/vue-scrollto/commit/55afb50))

## [2.16.2](https://github.com/rigor789/vue-scrollto/compare/v2.16.1...v2.16.2) (2019-09-10)


### Bug Fixes

* calculation for {force: false, offset: nonZero} ([#139](https://github.com/rigor789/vue-scrollto/issues/139)) ([f01ce23](https://github.com/rigor789/vue-scrollto/commit/f01ce23)), closes [#138](https://github.com/rigor789/vue-scrollto/issues/138)

## [2.16.1](https://github.com/rigor789/vue-scrollto/compare/v2.16.0...v2.16.1) (2019-09-10)


### Bug Fixes

* force:false to correctly check element visibility in viewport ([#150](https://github.com/rigor789/vue-scrollto/issues/150)) ([14eb022](https://github.com/rigor789/vue-scrollto/commit/14eb022))

# [2.16.0](https://github.com/rigor789/vue-scrollto/compare/v2.15.1...v2.16.0) (2019-09-10)


### Features

* pass additional parameters to offset callback ([#135](https://github.com/rigor789/vue-scrollto/issues/135)) ([e862213](https://github.com/rigor789/vue-scrollto/commit/e862213))

## [2.15.1](https://github.com/rigor789/vue-scrollto/compare/v2.15.0...v2.15.1) (2019-09-10)


### Bug Fixes

* onDone not being called with force: true (references [#111](https://github.com/rigor789/vue-scrollto/issues/111)) ([#129](https://github.com/rigor789/vue-scrollto/issues/129)) ([6ff03b2](https://github.com/rigor789/vue-scrollto/commit/6ff03b2))

## v2.15.0 (2019-3-18)
- call onDone when no scrolling is needed (#128)

## v2.14.0 (2019-2-27)
- Add nuxt module (#115)

## v2.13.0 (2018-9-13)

## v2.12.0 (2018-9-13)
- Add force parameter (#103)
- fix SSR issue with global.window (#104)

## v2.11.0 (2018-3-10)
- Add element parameter to onStart and onDone callbacks (#79)

## v2.10.0 (2018-3-4)
- Added onStart callback (#76) 

## v2.9.0 (2018-2-24)
- Export scroller factory function (#74)

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

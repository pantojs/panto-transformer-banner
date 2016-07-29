# panto-transformer-banner
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url] [![Coverage Status][coveralls-image]][coveralls-url]

Banner transformer for panto.

```js
panto.loadTransformer('banner');

panto.pick('**/*.js').banner({
    banner: '/*Copyright*/'
});
```

## options
 - banner:Function|String

[npm-url]: https://npmjs.org/package/panto-transformer-banner
[downloads-image]: http://img.shields.io/npm/dm/panto-transformer-banner.svg
[npm-image]: http://img.shields.io/npm/v/panto-transformer-banner.svg
[travis-url]: https://travis-ci.org/pantojs/panto-transformer-banner
[travis-image]: http://img.shields.io/travis/pantojs/panto-transformer-banner.svg
[david-dm-url]:https://david-dm.org/pantojs/panto-transformer-banner
[david-dm-image]:https://david-dm.org/pantojs/panto-transformer-banner.svg
[david-dm-dev-url]:https://david-dm.org/pantojs/panto-transformer-banner#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/pantojs/panto-transformer-banner/dev-status.svg
[coveralls-image]:https://coveralls.io/repos/github/pantojs/panto-transformer-banner/badge.svg?branch=master
[coveralls-url]:https://coveralls.io/github/pantojs/panto-transformer-banner?branch=master

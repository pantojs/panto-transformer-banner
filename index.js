/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-07-29[12:03:02]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const Transformer = require('panto-transformer');

class BannerTransformer extends Transformer {
    _transform(file) {
        let banner = this.options.banner;

        if (panto._.isFunction(banner)) {
            banner = banner.call(file, file);
        }

        return Promise.resolve(panto._.extend(file, {
            content: banner + file.content
        }));
    }
    isTorrential() {
        return false;
    }
}

module.exports = BannerTransformer;

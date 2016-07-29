/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-07-29[12:03:02]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';
const assert = require('assert');
const panto = require('panto');
const BannerTransformer = require('../');

describe('panto-transformer-banner', () => {
    describe('#transform', () => {
        it('should prepend string banner', done => {
            new BannerTransformer({
                banner: '/*Copyright*/\n'
            }).transform({
                filename: 'a.js',
                content: 'function(){};'
            }).then(file => {
                assert.deepEqual(file.content, '/*Copyright*/\nfunction(){};');
            }).then(() => done()).catch(e => console.error(e));
        });
        it('should prepend function banner', done => {
            new BannerTransformer({
                banner: function (file) {
                    return `/*${file.filename}*/\n`;
                }
            }).transform({
                filename: 'a.js',
                content: 'function(){};'
            }).then(file => {
                assert.deepEqual(file.content, '/*a.js*/\nfunction(){};');
            }).then(() => done()).catch(e => console.error(e));
        });
    });
});

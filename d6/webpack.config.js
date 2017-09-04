'use strict';

/* eslint no-console: "off" */
const webpackConfigs = require('./conf/webpack');
const defaultConfig = 'dev';

module.exports = (configName) => {
    return webpackConfigs[configName||defaultConfig];
};

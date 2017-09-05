'use strict';
let base = require("./base.js");
const webpack = require('webpack');
process.env.NODE_ENV = "prod";
module.exports = Object.assign({}, base, {
    cache: false,
    devtool: 'source-map',
    plugins: base.plugins.concat([
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ])
});
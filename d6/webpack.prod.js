'use strict';
process.env.NODE_ENV = "prod";
let common = require("./webpack.common.js");
const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = merge(common, {
    cache: false,
    devtool: 'source-map',
    plugins: [
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
})
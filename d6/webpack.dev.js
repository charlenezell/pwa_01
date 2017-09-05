'use strict';
process.env.NODE_ENV = "dev";
let common = require("./webpack.common.js");
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(common, {
    plugins: [

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devtool: 'inline-source-map'
})
'use strict';
process.env.NODE_ENV = "dev";
let common = require("./webpack.common.js");
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(common, {
    devServer: {
        contentBase: './pages/',
        publicPath: '/bundles/',
        // historyApiFallback: true,
        hot: true,
        // hotOnly:true,
        inline: true,
        port: 8000,
        proxy: {
            '/qq': {
                target: 'http://qq.100bt.com',
                pathRewrite: { '^/qq': '' },
                changeOrigin: true
            },
            '/hs': {
                target: 'http://www.hushuo.bt',
                pathRewrite: { '^/hs': '' },
                changeOrigin: true
            }
        }
    },
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
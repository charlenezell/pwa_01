'use strict';
let base=require ("./base.js");
const webpack = require('webpack');
process.env.NODE_ENV="dev";
module.exports=Object.assign({},base,{
    plugins:base.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]),
    devtool: 'source-map'
});
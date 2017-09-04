'use strict';
let base=require ("./base.js");
const webpack = require('webpack');
module.exports=Object.assign({},base,{
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
});
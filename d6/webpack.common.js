const path = require("path");

const glob = require("glob");

const webpack = require('webpack');



function fromSrcRoot(target) {
    return path.join("src", target);
}

function fromBuildRoot(target) {
    return path.join(__dirname, target);
}

function allEntryScript() {
    let t = {}
    glob.sync(fromSrcRoot("entry") + "/*.js").forEach(v => {
        w = [path.resolve("./", v)];
        if (process.env.NODE_ENV == "dev") {
            w = ['webpack-dev-server/client?http://0.0.0.0:8000/','webpack/hot/only-dev-server', 'react-hot-loader/patch'].concat(w);
        }
        t[path.basename(v, '.js')] = w;
    });
    // t.polyfills = ["babel-polyfill","isomorphic-fetch"];
    // t.reactlibs = ["react","react-dom","redux","react-redux","redux-saga","redux-thunk"];
    return t;
}
module.exports = {
    entry: allEntryScript(),
    output: {
        filename: '[name].js',
        path: path.resolve("./dist"),
        publicPath: '/bundles/'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader'
            }]
        }, {
            test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2)$/,
            loader: 'file-loader'
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            },
            {
                loader: 'css-loader'
            },
            {
                loader: 'postcss-loader'
            },
            {
                loader: 'sass-loader'
            }
            ]
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    resolve: {

        // options for resolving module requests
        // (does not apply to resolving to loaders)
        // "alias":{
        //     "react":"preact-compat",
        //     "react-dom":"preact-compat"
        // },
        modules: [
            "node_modules"
        ],
        // directories where to look for modules

        extensions: [".js", ".json", ".jsx", ".css"]
        // extensions that are used
    },

    plugins: [

        // new webpack.optimize.CommonsChunkPlugin({
        //     names: ['polyfills','reactlibs'],
        //     minChunks: Infinity
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'
        // })
    ]
}
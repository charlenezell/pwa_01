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
            w = ['webpack/hot/only-dev-server', 'react-hot-loader/patch'].concat(w);
        }
        t[path.basename(v, '.js')] = w;
    });
    t.common = ["babel-polyfill"]
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
            "node_modules",
            path.resolve(__dirname, "app")
        ],
        // directories where to look for modules

        extensions: [".js", ".json", ".jsx", ".css"]
        // extensions that are used
    },
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
            }
        }
    },
    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: Infinity
        })
    ]
}
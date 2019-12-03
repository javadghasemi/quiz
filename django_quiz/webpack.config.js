const path = require('path');
const webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: "./static/src/js/index.js",
    watch: true,
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'static/dist'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new BundleTracker({filename: 'static/webpack-stats.json'}),
        new WriteFilePlugin()
    ],

    module: {
        rules: [
            {
                test: /\.css$/, use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            }
        ]
    },

    resolve: {
        extensions: [
            '.js'
        ]
    }
};

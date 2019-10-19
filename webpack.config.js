const path = require('path');
const webpack = require('webpack');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
    node: {
        fs: 'empty',
    },
    target: 'node',
    // externals: [nodeExternals()],
    // entry: ['intersection-observer', './src/index.js'],
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
            },
        ],
    },
    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.ProgressPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ] : [],
    stats: {
        colors: true,
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src/'),
        },
    },
};

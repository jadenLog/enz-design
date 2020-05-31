const path = require('path');
const webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');

const SRC_DIR = path.resolve(__dirname, '../src');
const DIST_DIR = path.resolve(__dirname, '../');

const baseConfig = require('./webpack.config.base');
const EnvironmentKeys = require('./EnvironmentKeys');

module.exports = (env) => {
    const envKeys = EnvironmentKeys.get(env);

    return merge(baseConfig, {
        mode: 'production',
        entry: {
            bundle: ['@babel/polyfill', `${SRC_DIR}/index.js`],
        },
        output: {
            path: DIST_DIR,
            filename: 'index.js',
            libraryTarget: 'umd',
            libraryExport: 'default',
        },
        plugins: [
            new webpack.DefinePlugin({
                ...envKeys,
            }),
        ],
    });
};
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const merge = require('webpack-merge');

const SRC_DIR = path.resolve(__dirname, '../src');
const DIST_DIR = path.resolve(__dirname, '../dist');

const baseConfig = require('./webpack.config.base');
const EnvironmentKeys = require('./EnvironmentKeys');

module.exports = (env) => {
    const envKeys = EnvironmentKeys.get(env);

    return merge(baseConfig, {
        mode: 'development',
        devtool: 'source-map',
        entry: {
            bundle: ['@babel/polyfill', `${SRC_DIR}/local.jsx`],
            vendor: ['react', 'react-dom', 'axios'],
        },
        output: {
            path: DIST_DIR,
            filename: '[name].js',
            publicPath: '/',
        },
        splitChunks: {
            cacheGroups: {
                vender: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'vendor',
                    enforce: true,
                },
            },
        },
        devServer: {
            contentBase: './dist',
            port: 3000,
            hot: true,
            open: true,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: `${SRC_DIR}/index.html`,
                inject: true,
                filename: `${DIST_DIR}/index.html`,
            }),
            new webpack.HotModuleReplacementPlugin(),
            new ManifestPlugin({
                fileName: 'manifest.json',
                basePath: './dist/',
            }),
            new webpack.DefinePlugin({
                ...envKeys,
            }),
        ],
    });
};
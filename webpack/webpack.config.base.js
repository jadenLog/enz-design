const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                cache: true,
                parallel: true,
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            name: '[name].[ext]?[hash]',
                            publicPath: '/',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
};
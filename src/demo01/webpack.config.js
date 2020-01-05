const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
    mode: 'production',
    // mode: 'development',
    optimization: {
        usedExports: true
    },
    entry: path.resolve(__dirname, './index.js'),
    // devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../dist')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../../index.html'),
        })
        // new webpack.optimize.ModuleConcatenationPlugin()
    ]
}
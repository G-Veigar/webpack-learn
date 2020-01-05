const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: path.resolve(__dirname, './index.js'),
    devtool: 'source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../../dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出'
        })
    ]
}
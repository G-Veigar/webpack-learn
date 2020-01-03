const path = require('path')

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, './index.js'),
        sayhi: path.resolve(__dirname, './sayhi.js'),
    },
    devtool: 'source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../dist')
    }
}
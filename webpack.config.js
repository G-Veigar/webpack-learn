const path = require('path')

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './src/demo01/index.js',
    devtool: 'source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}
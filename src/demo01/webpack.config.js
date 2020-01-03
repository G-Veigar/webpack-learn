const path = require('path')

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    devtool: 'source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../../dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'css-loader'
                ]
            }
        ]
    }
}
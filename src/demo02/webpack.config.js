const path = require('path')

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './src/demo02/index.js',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                'style-loader',
                'postcss-loader'
                ]
            }
        ]
    }
}
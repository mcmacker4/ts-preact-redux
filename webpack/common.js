const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/main.tsx",
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: "replaceme.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                loader: 'source-map-loader',
            },
            {
                test: /\.css?$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        }),
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css'],
        alias: {
            'react': 'preact/compat',
            'react-dom': 'preact/compat'
        }
    }
}

const path = require('path');0
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'end-word',
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./client'],
    },
    
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: [
                    'react-refresh/babel',
                ]
            },
            
        }],
        
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
    devServer: {
        devMiddleware: { publicPath: '/dist/' },
        static: { directory: path.resolve(__dirname) },
        hot: true,

    }
}
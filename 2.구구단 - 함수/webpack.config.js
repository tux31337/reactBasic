const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'gugudan-setting',
    mode: 'development',
    devtool: 'eval', // 개발시에는 eval    배포 : hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./client.jsx'],
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', {
                    targets: {
                        //browsers: ['last 2 chrome versions'],  //chrome버전 최신버전의 2개만 지원하게끔 맞춰줌
                        browsers: ['> 0.5% in KR'],
                    },
                    debug: true,
                }], 
                '@babel/preset-react'], // preset : plugin들의 모임
                plugins: ['@babel/plugin-proposal-class-properties'],
            }
        }]
    },

    
    plugins: [ // 추가적으로 하고싶은 작업
        new webpack.LoaderOptionsPlugin({ debug: true}),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }
}
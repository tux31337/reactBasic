const path = require('path');

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']  //확장자를 entry에 일일이 적기 싫을때
    },
    entry: {
        app: ['./client.jsx'],
    }, // 입력

    //엔트리의 파일을 읽은후 module을 적용한후 output을 만든다.
    module: {
        rules: [{
            //여러개의 규칙을 적용할 수 있음
            test: /\.jsx?/, //js파일이랑 , jsx파일을 룰을적용하겠다라는 뜻
            loader: 'babel-loader',   //babel-loader를 적용해서 옛날문법에서도 돌아가게하겠다
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-class-properties'],
            }
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }
};
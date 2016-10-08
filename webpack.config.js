var path = require('path');

module.exports = {

    entry: {
        main: ['./app/main.jsx'],
        index: ['./app/index.jsx'],
    },

    output: {
        path: './dist',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader!jsx-loader?harmony'
            },
            {
                test: /\.css?$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            }
        ]
    }
};


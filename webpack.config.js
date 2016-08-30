var path = require('path');

module.exports = {

    entry:[
        path.resolve(__dirname, './app/main.jsx'),
    ],

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
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
            }
        ]
    }
};


const path = require('path');
module.exports = {
    context: __dirname,
    entry: './components/ClientApp.jsx',
    output:{
        path: path.join(__dirname,'/public'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve:{
        extensions: ['','.js','.jsx','.json']
    },
    stats:{
        colors:true,
        reasons:true,
        chunks: false
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader'
            }
            ,
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}
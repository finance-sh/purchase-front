var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './main.jsx'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
   module: {
        loaders: [
            {
                test: /\.js|jsx$/, //是一个正则，代表js或者jsx后缀的文件要使用下面的loader
                exclude: /node_modules/, 
                loader: "babel-loader",
                query: {presets: ['es2015','react']}
            },{
                  test: /\.(less|css)$/,
                  loaders:[ 'style-loader','css-loader','less-loader'],
             }  
        ]
    }
};
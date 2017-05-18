const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// first thing is to give the app and entry point and exit location
module.export = {
  entry: './app/index.js';
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      //any files with .js will be run through babel-loader.
      { test: /\.(js)$/, use: 'babel-loader' },
      //any files with css will pass through css-loader then through style-loader.
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
};

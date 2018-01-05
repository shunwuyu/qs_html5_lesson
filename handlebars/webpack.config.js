const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname + '/src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        loaders: ['handlebars-loader']
      }
    ]
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules|dist|build|docs|css/,
    poll: 1000
  }
}
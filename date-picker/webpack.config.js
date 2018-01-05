const webpack = require('webpack')
const path= require('path')
module.exports = {
  // 入口
  entry: {
    // bundle 打包
    'tqb-date-picker':'./src/main.js'
  },
  output: {
    filename: '[name].bundle.js',
    // dist windows linux
    // C:\  /var/root/
    // __dirname 得到一个绝对路径 node的常量
    path: path.resolve(__dirname, './dist')
  },
  module: {
    // 加载器 import .js 使用babel-loader 自动babel 编译
    // stylus  stylus-loader
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        loader: ["handlebars-loader"]
      }
    ]
  },
  externals: {
    'jquery': "jQuery"
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules|dist|build|docs|css/,
    poll: 1000
  }
}
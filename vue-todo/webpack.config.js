// // 运行环境是node, 优先使用common.js规范
// const webpack = require("webpack")
// const path = require("path")

// module.exports = {
//   entry: path.resolve(__dirname + "/src/main.js"),
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname + "/dist/js")
//   },
//   devtool: "source-map",
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: "babel-loader"
//       },
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader'
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.js', '.vue'],
//     alias:{
//       'vue$':'vue/dist/vue.esm.js'
//     }
//   },

//   watch: true,
//   watchOptions: {
//     ignored: /node_modules|dist|build|docs|css/,
//     poll: 1000
//   }
// }

// 运行环境是node, common.js规范
const webpack = require('webpack');
const path = require('path');
module.exports = {
  entry: path.resolve(__dirname + "/src/main.js"),
  output: {
    path: path.resolve(__dirname + "/dist/js"),
    filename: "bundle.js"
  },
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules|dist|build|docs|css/,
    poll: 1000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve:{
    extensions: ['.js', '.vue'],
    alias:{
        'vue$':'vue/dist/vue.esm.js'
    }
  }
}

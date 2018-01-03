// webpack配置文件
const webpack = require('webpack');
const path = require('path');
module.exports = {
    // 入口
    entry: {
        // bundle 打包
       'tqb-date-picker': './app/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        // /dist windows linux 根目录不一样
        // path 路径模块
        // __dirname 得到绝对路径  node的常量
        path: path.resolve(__dirname,'./dist')
    },
    // 负责每一个生产环节
    module: {
        // 加载器 import js模块化里 babel-loader
        // 自动加载babel编译的功能
        // stylus  stylus-loader
        // 加载一个新的功能
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loaders: ["babel-loader","eslint-loader"]
            }
        ]
    },
    // 配置选项
    externals: {
        'jquery': 'jQuery'
    },
    // 监听文件的改变
    watch: true,
    watchOptions: {
        ignored: /node_modules|dist|build|docs|css/,
        // 每秒监测文件
        poll: 1000
    }
}

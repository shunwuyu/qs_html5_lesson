const webpack = require("webpack");
const path = require("path");
module.exports = {
    // 入口文件
    entry: {
        // bundle 打包  tqb-date-picker 给入口取一个别名
        "tqb-date-picker": "./app/main.js"
    },
    output: {
        // 打包后的文件名
        // [name] 是占位符  可以是  入口别名  tqb-date-picker
        filename: "[name].bundle.js",
        // /dist   window linux
        // C:\  /var/root
        // path 路径模块解决了  可以用Linux的地址来表达地址
        // __direname 绝对路径，  一个 node 常量
        path: path.resolve(__dirname, "./dist")
    },
    // 在开始和结束之间  负责所有的模块  实质上还是一个工作流
    module: {
        // 加载器 import .js  
        // babel-loader  babel 编译功能
        // stylus stylus-loader

        // test 匹配了所有以.js结束的文件
        loaders: [
            {
                test: /\.js/,
                exclude: /node_module/,
                loaders: ["babel-loader", "eslint-loader"]
            }
        ]
    },
    // 不需要打包的文件： jQuery
    externals: {
        "jquery": "jQuery"
    },
    // 监听文件改变
    watch: true,
    watchOptions: {
        ignored: /node_modules|dist|build|docs|css/,
        // 每秒钟监测文件的改变
        poll: 1000
    }
}
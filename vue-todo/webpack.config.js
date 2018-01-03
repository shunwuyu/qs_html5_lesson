// webpack 的运行环境是node  因此  优先使用的是common.js 规范
const webpack = require("webpack");
const path = require('path');
// console.log( path.resolve(__dirname + "/dist/js/"));
module.exports = {
    // path.resolve 解决了 Windows 和 Linus 路径斜杠相反的问题
    entry: path.resolve(__dirname + "/src/main.js"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname + "/dist/js/")
    },
    devtool: "source-map",
    watch: true,
    watchOptions: {
        ignored: /node_modules|dist|build|docs|css/,
        poll: 1000
    },
    module: {
        // loader 预处理
        // 源代码 浏览器之间  用webpack 承担中心的工作
        // vue 文件  本身是不能被js 引用的
        loaders :[
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    resolve:{
        extensions: [".js", ".vue"],
        // 强行识别vue
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}
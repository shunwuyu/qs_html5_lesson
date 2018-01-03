const webpack = require('webpack');
const path = require('path');

module.exports = {
    // 入口
    entry:{
        // bundle 打包
        'tab-date-picker':'./src/main.js'
    },
    output:{
        filename:'[name].bundle.js',
        // ./dist  windows linux
        //C:\  /var/root
        // __dirname 会到得到绝对路径，node的常量
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        // 加载器 import .js babel-loader
        // babel编译功能
        // stylus stylus-loader
        loaders:[
            {
                test:/\.js/,
                exclude:/node_modules/,
                loaders:["babel-loader","eslint-loader"]
            }
        ]
    },
    externals:{
        'jquery':'jQuery'
    },
    //监听文件改变
    watch: true,
    watchOptions: {
      ignored: /node_modules|dist|build|docs|css/,
      poll: 1000
    }  
}
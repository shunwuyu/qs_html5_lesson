// common.js规范, node最为js的后端实现 最成功之处
// 只想在node 环境下运行测验一下而已 所以不用 es6的import 省的babel转译es5

const path = require('path')
// 绝对路径， 目录过程， 写完了代码后 有可能换目录存放,
// __dirname 将不改变影响
console.log(path.resolve(__dirname, 'dist'))
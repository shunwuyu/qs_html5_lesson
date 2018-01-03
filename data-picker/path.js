// common.js 规范， node作为JS后端最成功的地方
// 在  node 环境下运行代码  使用common.js  也就是用require 而不是import
const path = require("path");
// 返回绝对路径， 目录过程， 写完了代码之后， 有可能会换目录存放， 使用__dirname将不受改变影响
// 下面会加一个dist目录
console.log(path.resolve(__dirname, "dist"));
// common.js 规范 node作为js后端实现最成功的地方
// node环境下运行一下就好
const path = require('path');
// 绝对路径 目录过程 写完代码之后，有可能会换目录存放，使用__dirname 将不受改变的影响
console.log(path.resolve(__dirname,'dist')); 
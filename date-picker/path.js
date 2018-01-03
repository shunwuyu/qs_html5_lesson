// common.js 规范，node作为js的后端实现最成功
// node环境下运行
const path = require('path');
// 返回绝对路径，目录过程，写完了代码之后，有可能换目录存放，__dirname 将不受改变影响
console.log(path.resolve(__dirname,'dist'));
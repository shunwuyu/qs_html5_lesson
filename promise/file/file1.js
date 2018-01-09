const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log('异步读取:' + data.toString());
});

var data = fs.readFileSync('input2.txt');
console.log("同步读取：" + data.toString());
console.log("程序执行完毕");

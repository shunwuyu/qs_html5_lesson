// 回调地狱
const fs = require('fs');
fs.readFile('input.txt', (err, data) => {
  if (!err) {
    console.log(data.toString());
    fs.readFile('input2.txt', (err, data) => {
      if (!err) {
        console.log(data.toString());
        fs.readFile('input3.txt', (err, data) => {
          if (!err) {
            console.log(data.toString());
          }
        })
      }
    });
  }
});
// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// // canvas 绘图
// // es6 声明变量使用let 具有块级作用域的效果
// // offsetWidth 偏移量  内容宽度
// // 任何一个offsetWidth都能得到内容的宽度 
// // 表达式从右向左赋值
//  let w = canvas.width = canvas.offsetWidth;
//  let h = canvas.height = canvas.offsetHeight;
//  let circles = [];

//  let current_circle = new CurrentCircle(0, 0);
 
//  let init = function (num) {
//     for (var i = 0; i < num; i++){
//         // 画圆 是一个个独立的结点 代表着每个人
//         // Math.random 会产生一个0-1的随机数
//         circles.push(new Circle(Math.random()*w, Math.random()*h));
//     }
//     draw();
//  }

//  function draw() {
//      // 擦掉上一帧
//      ctx.clearRect(0,0,w,h);
//      for (let i = 0; i < circles.length; i++) {
//          circles[i].move(w,h);
//          circles[i].drawCircle(ctx);
//          for (let j = i+1; j < circles.length; j++) {
//          circles[i].drawLine(ctx, circles[j]);
//         }
//     }
//     if (current_circle.x) {
//         current_circle.drawCircle(ctx);
//         for (var k = 1; k < circles.length; k++){
//             current_circle.drawLine(ctx, circles[k]);
//         }
// }

//         // 每秒进行60帧的重绘
//         // 形成递归调用 
//      requestAnimationFrame(draw);
//  }
// // console.log(document.body.clientWidth); 623
// // console.log(canvas.offsetWidth); 623
// // console.log(canvas.width); 300
// // 画60个圆圈
// window.addEventListener('load',function () {
//     init(60);
// });
// // window.onload = function() {

// // }
// window.onmousemove = function(e) {
//     current_circle.x = e.clientX;
//     current_circle.y = e.clientY;

// }
// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');
// // canvas  绘图   
// // es6 声明变量使用let  块级作用域
// // offset 内容宽度
// // console.log(document.body.clientWidth);
// // console.log(canvas.offsetHeight);
// console.log(canvas.width);
// let w = canvas.width = canvas.offsetWidth;
// let h = canvas.height = canvas.offsetHeight;
// let circles = [];

// let current_circle = new CurrentCircle(0, 0);

// let init = function(num) {
//     for (var i = 0; i < num; i++) {
//         // 画圆，一个个独立的结点，代表每个人
//         circles.push(new Circle(Math.random() * w, Math.random() * h));
//     }
//     draw();
// }

// function draw() {
//     ctx.clearRect(0, 0, w, h);
//     for (let i = 0; i < circles.length; i++) {
//         circles[i].move(w, h);
//         circles[i].drawCircle(ctx);
//         for (let j = i + 1; j < circles.length; j++) {
//             circles[i].drawLine(ctx, circles[j]);
//         }
//     }
//     if (current_circle.x) {
//         current_circle.drawCircle(ctx);
//         for (var k = 1; k < circles.length; k++) {
//             current_circle.drawLine(ctx, circles[k]);
//         }
//     }
//     // 每秒进行60帧的重绘

//     requestAnimationFrame(draw);
// }

// window.addEventListener('load', function() {
//     init(60);
// })

// window.onmousemove = function(e) {
//         current_circle.x = e.clientX;
//         current_circle.y = e.clientY;
//     }
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
// canvas  绘图   
// es6 声明变量使用let  块级作用域
// offset 内容宽度
// console.log(document.body.clientWidth);
// console.log(canvas.offsetHeight);
console.log(canvas.width);
let w = canvas.width = canvas.offsetWidth;
let h = canvas.height = canvas.offsetHeight;
let circles = [];

let current_circle = new CurrentCircle(0, 0);

let init = function(num) {
    for (var i = 0; i < num; i++) {
        // 画圆，一个个独立的结点，代表每个人
        circles.push(new Circle(Math.random() * w, Math.random() * h));
    }
    draw();
}

function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < circles.length; i++) {
        circles[i].move(w, h);
        circles[i].drawCircle(ctx);
        for (let j = i + 1; j < circles.length; j++) {
            circles[i].drawLine(ctx, circles[j]);
        }
    }
    if (current_circle.x) {
        current_circle.drawCircle(ctx);
        for (var k = 1; k < circles.length; k++) {
            current_circle.drawLine(ctx, circles[k]);
        }
    }
    // 每秒进行60帧的重绘

    requestAnimationFrame(draw);
}

window.addEventListener('load', function() {
    init(60);
})

window.onmousemove = function(e) {
        current_circle.x = e.clientX;
        current_circle.y = e.clientY;
    }
    // window.onload = function() {

// }

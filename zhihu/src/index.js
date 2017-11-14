
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
    // 递归 在函数内部调用函数
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

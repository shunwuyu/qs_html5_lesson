let canvas = document.getElementById('canvas');
let cxt = canvas.getContext('2d');
//canvas 绘图
// es6 声明变量使用let 块级作用域的效果
// offset 偏移量 内容的宽度
// console.log(document.body.clientWidth);
// ==
// console.log(canvas.offsetWidth);
console.log(canvas.width);
let w = canvas.width = canvas.offsetWidth;
let h = canvas.height = canvas.offsetHeight;
let circles = [];
let current_circle = new CurrentCircle(0,0);
let init = function (num) {
    for(var i = 0;i<num;i++){
        // 画圆 一个个独立的结点，代表着每个人
        circles.push(new Circle(Math.random()*w,Math.random()*h));
    }
    draw();
}
function draw() {
    cxt.clearRect(0,0,w,h);
    for(let i = 0;i < circles.length;i++){
        circles[i].move(w, h);
        circles[i].drawCircle(cxt);
        for(j = i+1;j<circles.length;j++){
            circles[i].drawLine(cxt,circles[j]);
        }
    }
    if(current_circle.x){
        current_circle.drawCircle(cxt);
        for(var k=1;k<circles.length;k++){
            current_circle.drawLine(cxt,circles[k]);
        }
    }
    // 每秒进行60帧的重绘
    // 递归调用
    requestAnimationFrame(draw);
}
window.addEventListener('load',function(){
    init(100);
});
window.onmousemove = function (e) {
    current_circle.x = e.clientX;
    current_circle.y = e.clientY;
}
// ==
// window.onload = function () {
// }


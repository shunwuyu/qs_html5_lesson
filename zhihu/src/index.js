let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
// canvas绘图
// es6 声明变量使用let 块级作用域效果
// console.log(document.body.clientWidth);
// console.log(canvas.offsetWidth);
console.log(canvas.width);
let w = canvas.width = canvas.offsetWidth;
let h = canvas.height = canvas.offsetHeight;
let circles = [];

let init = function(num){
    for (var i= 0 ;i < num; i++) {
        // 画圆，一个个独立的结点 ，代表着每个人
        circles.push(new Circle(Math.random()*w,Math.random()*h));

    }
    draw();
};

function draw(){
    ctx.clearRect(0,0,w,h);
    for(let i = 0; i <circles.length; i++){
        // Circle.drawCircle(ctx);
        circles[i].move(w,h);
        circles[i].drawCircle(ctx);
    }
    // 每秒进行60帧重绘

    requestAnimationFrame(draw);
}
window.addEventListener('load',function(){
    init(60);
});
// window.onload= function(){

// }  向下监听

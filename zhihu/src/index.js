let canvas = document.getElementById('canvas');

let ctx = canvas.getContext('2d');
// cancas 绘图
// es6 声明变量使用let  块级作用域
// console.log(document.body.clientHeight);
// console.log(canvas.offsetWidth);
// console.log(canvas.width);

//ofset 内容宽度

let w = canvas.width = canvas.offsetWidth;
let h = canvas.height = canvas.offsetHeight;

let circles = [];

let current_circle = new Current_Circle(0,0);

let init = function (num) {
    for (let i = 0; i < num; i++) {
        // 画圆  一个个独立的节点  代表着每个人
        ctx.beginPath();
        circles.push(new Circle(Math.random()*w, 
        Math.random()*h));
    }
    draw();
}


function draw(){
    ctx.clearRect(0,0,w,h);
    for (let i = 0;i<circles.length;i++)
    {
        circles[i].move(w,h);
        circles[i].drawCircle(ctx);
        for(let j = i+1;j<circles.length;j++)
        {
            circles[i].drawLine(ctx,circles[j]);
        }
    }
    if(current_circle.x){
        current_circle.drawCircle(ctx);
        for(let k =1;k<circles.length;k++)
        {
            current_circle.drawLine(ctx,circles[k]);
        }
    }

    // 每秒进行60帧的重绘
    requestAnimationFrame(draw);
}


window.addEventListener('load',function(){
    init(50);
});
window.onmousemove = function(e){
    current_circle.x = e.clientX;
    current_circle.y = e.clientY;
}

// window.onload = function(){

// }
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
// canvas 绘图
// ES6内声明变量使用let 块级作用域
// offset 进行内容宽度的设置
let w =canvas.width = canvas.offsetWidth;
// console.log(document.body.clientWidth); 
// console.log(canvas.offsetWidth); 
 console.log(canvas.width);
let h =canvas.height = canvas.offsetHeight;
let circles = [];
let current_circle = new Current_Circle(0,0);




let init =function(num){
    for(var i =0 ; i < num ; i++){
        // 画圆，一个个独立的节点，代表着每个人

        circles.push(new Circle(Math.random()*w,Math.random()*h));
    }
    draw();
}
function draw(){
    ctx.clearRect(0,0,w,h); //清除上一次绘画
    for(let i = 0 ; i < circles.length ; i++){
        circles[i].move(w,h);
        circles[i].drawCircle(ctx);
        for(let j = i + 1; j < circles.length ; j++){
            circles[i].drawLine(ctx,circles[j]);
        }
    }
    if(current_circle.x){
        current_circle.drawCircle(ctx);
        for(var k = 1; k < circles.length;k++){
            current_circle.drawLine(ctx,circles[k]);
        }
    }
    //每秒进行60帧的重绘
    // requestAnimationFrame请求运动
    requestAnimationFrame(draw);//递归，函数内部继续调用函数
}

window.addEventListener('load',function(){
    init(60);//60个点
});

window.onmousemove = function(e){
    current_circle.x = e.clientX;
    current_circle.y = e.clientY;
}
// window.addEventListener('load',function(){})
// 等于window.onload = function(){}
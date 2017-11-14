// var Circle = function (x,y,r){
   
//     cxt.fillStyle="#FF0000";
//     cxt.beginPath();
//     cxt.arc(x,y,r,0,Math.PI*2,true);
//     cxt.closePath();
//     cxt.fill();
    
// }
class Circle {
    constructor (x,y) {
        // 圆 arc 圆心点 半径
        this.x = x;
        this.y = y;
        this.r = Math.random()*10;
        this._mx = Math.random();
        this._my = Math.random();
    }
    move(w,h){
        this._mx = (this.x < w && this.x > 0) ? this._mx:(-this._mx);
        this._my = (this.y < h && this.y > 0) ? this._my:(-this._my);
        this.x += this._mx/2;
        this.y += this._my/2;
    }
    drawCircle (cxt){
        cxt.beginPath();
        // 数学绘制函数
        cxt.arc(this.x,this.y,this.r,0,360);
        cxt.closePath();
        cxt.fillStyle = 'rgba(204,204,204,.3)';
        cxt.fill();
    }
    drawLine (cxt,_circle) {
        let dx = this.x - _circle.x;
        let dy = this.y - _circle.y;
        let d = Math.sqrt(dx*dx + dy*dy);
        if(d < 150){
            cxt.beginPath();
            cxt.moveTo(this.x,this.y);
            cxt.lineTo(_circle.x,_circle.y);
            cxt.closePath();
            cxt.strokeStyle = 'rgba(204,204,204,.3)';
            cxt.stroke();
        }


    }
}
class CurrentCircle extends Circle {
    constructor (x,y){
        super(x,y);
    }
    drawCircle(cxt) {
        cxt.beginPath();
        this.r = 8;
        cxt.arc(this.x,this.y,this.r,0,360);
        cxt.closePath();
        cxt.fillStyle = 'rgba(255,77,54,.6)';
        cxt.fill();
    }
}
class Circle {
    constructor(x,y){
        // 圆 arc 圆心点，半径
        this.x = x ;
        this.y = y ;
        this.r = Math.random()*10 ;
        this._mx = Math.random();//私有性
        this._my = Math.random();//私有性

    }
    //使圆运动
    move(w,h){
        this._mx = (this.x < w && this.x > 0)
        ? this._mx   //等于
        : (-this._mx);  //否则等于
        this._my = (this.y < h && this.y > 0)
        ? this._my   //等于
        : (-this._my);  //否则等于
        this.x += this._mx / 2 ; //偏移量
        this.y += this._my / 2 ; //偏移量
    }
    drawCircle (ctx){
        ctx.beginPath();
        // 数学绘制图形
        ctx.arc(this.x,this.y,this.r,0,360);
        ctx.closePath();
        ctx.fillStyle = 'rgba(204,204,204,0.5)';
        ctx.fill();
    }
    drawLine(ctx,_circle){
        let dx = this.x - _circle.x;
        let dy = this.y - _circle.y;
        let d = Math.sqrt(dx*dx + dy*dy);
        if(d <150){
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);//画笔移到坐标处
            ctx.lineTo(_circle.x,_circle.y);
            ctx.closePath();
            ctx.strokeStyle = 'rgba(204,204,204,0.5)';
            ctx.stroke();//轮廓
        }
    }
}

class Current_Circle extends Circle{
    constructor (x,y){
        super(x,y);
    }

    drawCircle(ctx){
        ctx.beginPath();
        this.r = 8 ;
        ctx.arc(this.x,this.y,this.r,0,360);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255,77,54,0.6)';
        ctx.fill();
    }
}
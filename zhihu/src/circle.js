class Circle {
    constructor (x,y){
        // 圆 arc 圆心点，半径，
        this.x = x;
        this.y = y;
        this.r = Math.random()*10;
        this._mx = Math.random();
        this._my = Math.random();
    }

    move(w,h) {
        this._mx = (this.x < w && this.x > 0)
        ? this._mx
        : (-this.x);
        this.x += this._mx/2;
        this.y += this._my/2; 
    }

    drawCircle (ctx) {
        ctx.beginPath();
        // 数学绘制函数
        ctx.arc(this.x,this.y,this.r,0, 360);
        ctx.closePath();
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fill();
    }
}

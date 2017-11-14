class Circle {
    constructor (x,y) {
        // 圆 arc 绘制椭圆 需要圆心点， 半径
        this.x = x;
        this.y = y;
        this.r = Math.random() * 10;
        this._mx = Math.random();
        this._my = Math.random();

    }

    move(w,h) {
        this._mx = (this.x < w && this.x > 0)
        ? this._mx
        : (-this.x);
        this.x += this._mx / 2;
        this.y += this._my / 2;
        this._my = (this.y < h && this.y > 0)
        ? this._my
        : (-this._my);
        
    }

    drawCircle (ctx) {
     //开始一个新的绘制路径
     ctx.beginPath();
     //  arc 为数学绘制函数
     ctx.arc(this.x, this.y, 
        this.r, 0, 360);
     // 起点和结点重合
     ctx.closePath();
     ctx.fillStyle = 
        'rgba(255, 0, 255, 1)';
     // 填充
     ctx.fill(); 
    }
    drawLine (ctx, _circle) {
      let dx = this.x - _circle.x;
      let dy = this.y - _circle.y;
      let d = Math.sqrt(dx*dx + dy*dy);
      if ( d < 150) {
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
        //   将画笔移到中心处
          ctx.lineTo(_circle.x,_circle.y);
          ctx.closePath();
          ctx.strokeStyle = 'rgba(255,0,255,1)';
          ctx.stroke();
      }
    }
}
class CurrentCircle extends Circle {
    constructor (x, y) {
        super (x, y);
    }
    drawCircle (ctx) {
        ctx.beginPath();
        this.r = 8;
        ctx.arc(this.x, this.y, this.r,
        0, 360);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255,77,0,1)';
        ctx.fill();
    }
}
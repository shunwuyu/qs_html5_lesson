class Circle {
    constructor(x, y) {
        // 绘制一个圆 arc 圆心点，半径
        this.x = x;
        this.y = y;
        this.r = this.r = Math.random() * 10;
        this._mx = Math.random();
        this._my = Math.random();
    }
    move(w, h) {
        this._mx = (this.x < w && this.x > 0) ? this._mx : (-this.x);
        this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);

        this.x += this._mx / 2;
        this.y += this._my / 2;
    }
    drawCircle(ctx) {
        ctx.beginPath();
        // 数学绘制函数
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        ctx.fillstlye = 'pink';
        ctx.fill();
    }
    drawLine(ctx, _circle) {
        let dx = this.x - _circle.x;
        let dy = this.y - _circle.y;
        let d = Math.sqrt(dx * dx + dy * dy);
        if (d < 150) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(_circle.x, _circle.y);
            ctx.closePath();
            ctx.strokStyle = 'pink';
            ctx.stroke();
        }
    }
}

class CurrentCircle extends Circle {
    constructor(x, y) {
        super(x, y);
    }
    drawCircle(ctx) {
        ctx.beginPath();
        this.r = 8;
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        ctx.fillstlye = 'pink';
        ctx.fill();
    }
}

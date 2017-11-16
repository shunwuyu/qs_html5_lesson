
// // let radius = function() {
// //     // 圆的半径

// // }
// // let begin = function beginPath() {
// //     // 开始位置
// // }
// // let stroke = function stroke() {

// // }
// // let circle = {
// //     // 圆的坐标和半径
// //     x: '100', 
// //     y: '100',
// //     radius: '50',
// // }
// // ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, true);
// class Circle {
//     // constructor es6 的构造函数
//     constructor (x, y, r) {
//         // 圆 arc 要得到圆心点和半径
//         this.x = x;
//         this.y = y;
//         this.r = Math.random()*10;
//         this._mx = Math.random();
//         this._my = Math.random();
//     }
//     move (w, h) {
//         this._mx = (this.x < w && this.x > 0) ? this._mx: (-this.x);
//         this.x += this._mx / 2;
//         this._my = (this.y < h && this.y > 0) ? this._my: (-this.y);
//         this.y += this._my / 2;
//     }
//     drawCircle (ctx) {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.r, 0, 360);
//         ctx.closePath();
//         // fillStyle html5 canvas颜色填充
//         ctx.fillStyle = 'rgba(204, 204, 204, .3)';
//         // 填充
//         ctx.fill();
//     }
//     drawLine (ctx, _circle) {
//         let dx = this.x - _circle.x;
//         let dy = this.y - _circle.y;
//         let d = Math.sqrt(dx * dx, dy * dy);
//         if (d < 150) {
//             ctx.beginPath();
//             ctx.moveTo(this.x, this.y);
//             ctx.lineTo(_circle.x, _circle.y);
//             ctx.closePath();
//             ctx.strokeStyle = 'rgba(204, 204, 204, .3)';
//             // 轮廓
//             ctx.stroke();
//         }
//     }
// }
// // 继承 从基类中得到子类 
// class CurrentCircle extends Circle {
//     constructor(x, y) {
//         super (x, y);
//     }
//     drawCircle (ctx) {
//         ctx.beginPath();
//         this.r = 8;
//         ctx.arc(this.x, this.y, this.r, 0, 360);
//         ctx.closePath();
//         ctx.fillStyle = 'rgba(255, 77, 54, .6)';
//         ctx.fill();
//     }
// }
// class Circle {
//     constructor(x, y) {
//         // 绘制一个圆 arc 圆心点，半径
//         this.x = x;
//         this.y = y;
//         this.r = this.r = Math.random() * 10;
//         this._mx = Math.random();
//         this._my = Math.random();
//     }
//     move(w, h) {
//         this._mx = (this.x < w && this.x > 0) ? this._mx : (-this.x);
//         this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);

//         this.x += this._mx / 2;
//         this.y += this._my / 2;
//     }
//     drawCircle(ctx) {
//         ctx.beginPath();
//         // 数学绘制函数
//         ctx.arc(this.x, this.y, this.r, 0, 360);
//         ctx.closePath();
//         ctx.fillstlye = 'rgba(204,204,204,.3)';
//         ctx.fill();
//     }
//     drawLine(ctx, _circle) {
//         let dx = this.x - _circle.x;
//         let dy = this.y - _circle.y;
//         let d = Math.sqrt(dx * dx + dy * dy);
//         if (d < 150) {
//             ctx.beginPath();
//             ctx.moveTo(this.x, this.y);
//             ctx.lineTo(_circle.x, _circle.y);
//             ctx.closePath();
//             ctx.strokStyle = 'rgba(204,204,204,.3)';
//             ctx.stroke();
//         }
//     }
// }

// class CurrentCircle extends Circle {
//     constructor(x, y) {
//         super(x, y);
//     }
//     drawCircle(ctx) {
//         ctx.beginPath();
//         this.r = 8;
//         ctx.arc(this.x, this.y, this.r, 0, 360);
//         ctx.closePath();
//         ctx.fillstlye = 'rgba(255,77,54,.6)';
//         ctx.fill();
//     }
// }
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
        this._mx = (this.x < w && this.x > 0) ? this._mx : (-this._mx);
        this._my = (this.y < h && this.y > 0) ? this._my : (-this._my);

        this.x += this._mx / 2;
        this.y += this._my / 2;
    }
    drawCircle(ctx) {
        ctx.beginPath();
        // 数学绘制函数
        ctx.arc(this.x, this.y, this.r, 0, 360);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255,77,54,.6)';
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
            ctx.strokeStyle ='rgba(255,77,54,.6)';
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
        ctx.fillStyle = 'rgba(255,77,54,.6)';
        ctx.fill();
    }
}

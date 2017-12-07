

// 如何手动实现 Array.prototype.map
var originArr = [1, 2, 3, 4, 5];
// var mapArr = originArr.map(item => (item * 3));

// console.log(mapArr);

// 手动实现 es6 -> es5 手写
// 闭包 高阶函数 作用域
// var newArr = [];
// for (let index = 0 , len = originArr.length; index < len; index++) {
//    newArr.push(originArr[index]*3); 
// }

// console.log(newArr);

// // step2封装成为一个函数 将一个数组每一项都进行再次运算返回一个新数组

// function multiplyByThreetime(originArr) {
//     var newArr = [];
//     for (let index = 0 , len = originArr.length; index < len; index++) {
//        newArr.push(originArr[index]*3); 
//     }
//     return newArr;
// }
// var timr = [1, 2, 2];
// console.log(multiplyByThreetime(timr));
// var MapTest = function () {
//     this.multiplyByThree();
    
// }

// MapTest.protoType.multiplyByThree = function (originArr) {
//     var newArr = [];
//     for (let index = 0 , len = originArr.length; index < len; index++) {
//        newArr.push(originArr[index]*3); 
//     }
//     return newArr;
// }

// step3 将具象的东西拿掉

// 数组 字符串数组 小写变成大写？
function timesFive(item) {
    return item*5;
}

function makeUpperCase(item) {
    return item.toUpperCase();
}

function mapMap(arr, fn) {
    // 函数内部 分几个函数 每个函数只做一件事情
    var newArr = [];
    for (var index = 0 , len = arr.length; index < len; index++) {
       newArr.push(fn(arr[index]));
    }
    return newArr;
}

console.log(mapMap(['a', 'b', 'c'], makeUpperCase));

Array.prototype.map = function(fn) {
    var newArr = [];
    for (var i=0; i< this.length; i++){
        newArr.push(fn(this[i], i, this));
    }
    console.log(this);
    return newArr;
}

var newArr = originArr.map(function(item, index, arr){
    return item*index;
});

console.log(newArr);

var sttt = ['a', 'b', 'c'];
console.log('a'.toUpperCase());


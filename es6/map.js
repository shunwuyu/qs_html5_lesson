// 如何手动实现Array.prototype.map
var originArr = [1,2,3,4,5];
// var newArr = originArr.map(item => {
//     return item*3;
// })
// console.log(newArr);
// 手动实现 es5实现es6 
// 闭包 高阶函数 作用域
// var newArr = [];
// for(var i = 0,len = originArr.length;i<len;i++){
//     newArr.push(originArr[i]*3);
// }
// 顺序流程化具象解决问题
// console.log(newArr);
// step2 封装函数
// 将一个数组每一项都3times 并且返回一个新数组
// function multiplyByThree (arr,n) {
//     var newArr = [];
//     for(var i = 0,len = arr.length;i<len;i++){
//         newArr.push(arr[i]*n);
//     }
//     return newArr;
// }
// console.log(multiplyByThree(originArr,5));

// step3 将具象的东西拿掉
// function timesThree(item){
//     return item*3;
// }
// function makeUpperCase(item) {
//     return item.toUpperCase();
// }
// 高阶函数 函数作为参数或者返回值
// function map(arr, fn) {
    // 函数内部 分为几个函数，每个函数只做一件事
//     var newArr = [];
//     for(var i = 0,len = arr.length;i<len;i++){
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;
// }

// console.log(map(originArr, timesThree));
// console.log(map(['a','b','c'],makeUpperCase));
Array.prototype.map = function(fn){
    var newArr = [];
    // console.log(this);
    for(var i = 0;i < this.length;i++){
        newArr.push(fn(this[i],i,this))
    }
    return newArr;  
}
var newArr = originArr.map(function(item,index,arr){
    return item*index;
})
console.log(newArr);
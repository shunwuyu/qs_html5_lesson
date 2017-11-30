'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//小吃店 pizza
//常量 es6 先考虑const let 
// var 基本不用
// 类型不能变，除了基本类型外，值是可以改变的
// const name = 'bentutu';
// name = 'songsong';
var featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
featured.push('芝士');
console.log(featured);
var specialty = ['Meatzza', 'Spicy Mama', 'Marghrita'];
var pizzas = [].concat(featured, ['vergitable'], specialty);
console.log(pizzas);
var fridayPizzas = [].concat(_toConsumableArray(pizzas));

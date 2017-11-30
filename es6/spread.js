//小吃店 pizza
//常量 es6 先考虑const let 
// var 基本不用
// 类型不能变，除了基本类型外，值是可以改变的
// const name = 'bentutu';
// name = 'songsong';
const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
featured.push('芝士');
console.log(featured);
const specialty = ['Meatzza', 'Spicy Mama', 'Marghrita'];
const pizzas = [...featured, 'vergitable', ...specialty];
console.log(pizzas);
const fridayPizzas = [...pizzas,];
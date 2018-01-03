// jquery是date-picker的依赖
import $ from 'jquery';
// 事件冒泡
// console.log('loci');
import Factory from './Factory';
$('body').on('click','.tqb-date-picker-input', event => {
  console.log(event.currentTarget);
  let target = $(event.currentTarget);
  console.log(target);
  let options = target.data();
  console.log(options);
  // Factory用的太大了吧？ 如果别的地方
  // 也要用Factory概念？打包时会命名空间
  let picker = Factory.createDatePicker(target, options);
});
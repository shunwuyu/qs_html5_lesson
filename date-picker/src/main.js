// jquery 是date-picker的依赖
import $ from 'jquery';
// 事件冒泡 
// console.log('aaaa');
import Factory from './Factory'

$('body').on('click', '.tqb-date-picker-input', event => {
  console.log(event.target)
  let target = $(event.currentTarget)
  console.log(target);
  let options = target.data();
  console.log(options);
  // Factory 用的太大了 如果别的地方也要用Factory呢
  // 打包时会命名空间
  let picker = Factory.createDatePicker(target, options);
})
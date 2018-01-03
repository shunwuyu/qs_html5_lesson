// 打包入口
// jquery是date-picker的依赖
import $ from 'jquery';
// 工厂模式
import Factory from './Factory';
// 外层点击事件 有效提升事件的使用范围，减少注册事件，提高性能,
// 可以链式调用
// 事件冒泡
$('body').on('click','.tqb-date-picker-input', event => {
    console.log(event.currentTarget);
    let target = $(event.currentTarget);
    console.log(target);
    let options = target.data();
    console.log(options);
    // Factory用的太大了吧？如果别的地方也要用Factory这个概念？打包时会命名空间
    let picker = Factory.createDatePicker(target,options);
    // console.log(target.attr('date-start'));
})
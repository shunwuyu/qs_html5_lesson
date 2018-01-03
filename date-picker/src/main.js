// jquery 是date-picker的依赖
import $ from 'jquery';
import Factory from './Factory';

// jquery封装的事件冒泡
$('body').on('click','.tqb-date-picker-input',event=>{
    let target = $(event.currentTarget);
    console.log(event.target);
    let options = target.data();
    console.log(options);
    // Factory用得太大了吧？如果别的地方也要用Factory这个概念呢？
    // 打包时会命名空间
    let picker = Factory.createDatePicker(target,options);
})

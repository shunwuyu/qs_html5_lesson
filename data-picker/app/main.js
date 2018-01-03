// jquery 是 date-picker 的依赖
import $ from "jquery";

// 事件冒泡
// 事件注册掉到外层  好处是  可以实现多次调用
import Factory from "./Factory";

$("body").on("click", ".tqb-date-picker-input", event => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.dataset.start);
    // 获得的是一个JQ节点  不再是一个HTML了
    let target = $(event.currentTarget);
    console.log(target);
    // 可以获得所有的data-值
    let options = target.data();
    console.log(options);
    // Factory 用的太大了 如果别的地方也要用Factory的概念？ 打包时会有命名空间
    let picker = Factory.createDatePicker(target, options);
    // let target = $(event.currentTarget);
})
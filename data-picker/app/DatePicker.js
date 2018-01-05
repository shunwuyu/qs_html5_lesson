import $ from "jquery";
// webpack 不会重复打包  当前页面需要jQuery进行了引入  在主页面也进行了引入   但是webpack只会打包一次
import template from "../template/picker.hbs";

export default class DatePicker {
    constructor(el, options) {
        console.log("DatePicker");
        this.createElement(options);
        this.delegateEvent(options);
    }
    createElement(options) {
        let o = {
            static: true,
            scattered: true,
            confirm: true
        }
        // template(o) 生成的是原生的dom，要对其进行操作，就要引入jQuery
        let item = $(template(o));
        item.appendTo(document.body);
        setTimeout(() => {
            item.removeClass("out")
        }, 10);
    }
    delegateEvent(options) {

    }
}
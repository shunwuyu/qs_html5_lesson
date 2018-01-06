import $ from 'jquery';
// webpack 一切皆可打包
import template from '../template/user.hbs'
const user = {
    name:'旅梦',
    age: 18,
    photo: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3191248617,1635470861&fm=27&gp=0.jpg'
}

$(function(){
    console.log("ready");
    // template 接受一个抽象的数据对象 将html模板进行编译，返回一个字符串
    // $() 能接受一段html字符串，通过jQuery变成封装好的html节点
    let item = $(
        template(user)
    );
    // 将元素挂载到挂载点上
    item.appendTo($('#root'))
})

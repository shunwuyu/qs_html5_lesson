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
    let item = $(
        template(user)
    );
    item.appendTo($('#root'))
})

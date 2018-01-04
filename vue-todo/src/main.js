// require("./css/style.css")
import Vue from 'vue'
// 使用vue 构建webapp
import App from './App.vue'
// 将App挂载(mount)至页面 root(挂载点)

new Vue({
  el: '#root',
  template: '<App />',
  components: {
    App
  }
})
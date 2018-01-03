import Vue from "vue";
// vue 构建webapp
import App from "./App.vue";
// 将App挂载(mount)在页面root上（挂载点）

new Vue({
    el: "#root",
    template: "<App />",
    components: {
        // es6 的语法  App: App
        App
    }
})
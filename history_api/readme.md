# route
resetful 网站的本质就是提供资源访问
url => 资源 一一对应关系
？queryString1=a&queryString2=b
backend 后端来做 都有一套路由规则 route
mvc 解析url，映射一个route，跟后端脚本对应的controller
fontend 前端接一切？
前端跟服务器相关性问题？
后端url => 资源  缺点：因为http协议，一个url一个资源，当资源跳转时，要来到href来刷新页面，用户体验不ok，在pc时代是可以忍受的，但是在移动时代就不ok了，显得打开速度很慢。
前端的url设计规则，如：https://m.taobao.com/#index
用#标记  html5 historyAPI  单页应用的概念
前端url 每一次的url不再是刷新式的跳转，而是切换一张小卡片一样，好像整个页面都没有动，即单页应用（SPA--SinglePageApplication）
动态更新界面？
--前端url规则：当url启动以后，交给ajax
跟vue有什么关系？
--现在的 url => page => 组件

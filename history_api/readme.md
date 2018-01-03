# route
resetful 网站的本质就是提供资源访问
url => 资源 一一对应关系
？queryString1=a&queryString2=b
backend 后端来做 都有一套路由规则 route
mvc 解析url 映射一个route 跟后端脚本对应的controller
/api
fontend 前端接管一切
解决了跟服务器相关性
url => 资源  缺点：http是无状态的 访问后会断开
需要href 但会带来刷新页面的问题  用户体验不OK PC时代是可以忍受的，但是移动时代就不行了
前端url设计规则  https://m.taobao.com/#index 
https://m.taobao.com/#home
用#标记  html5 historyAPI
前端url 不再是刷新页面，而是像切换一张小卡片，好像整个页面都没有动，叫做单页应用 SPA SinglePageApplication
动态更新界面 
前端url规则 url启动后，交给ajax
跟vue有什么关系？
url => page => 组件
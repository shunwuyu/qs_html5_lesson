#route
resetful  网站的本质就是提供资源访问
url =》 建立与资源的一一对应关系
？queryString=a&queryString2=b
以前backend 来做 路由规则 route
mvc 负责解析 url   url映射一个route  跟后端脚本对应的controller
例如 /book/123456  路由(route)就是一个中转站
现在后端 /api
现在fontend 来接管一切？
   以前 前端跟服务器相关性有问题，现在解决了。
   url =》 资源 有缺点， http协议
   href点击，但是每次点击都会刷新页面  用户体验不OK  在PC时代可以，
   https://m.taobao.com/#index  前端url设计规则 
   https://m.taobao.com/#home
   html5 historyAPI 不会使页面重新刷新 
   前端url 像切换一张小卡片一样，整个页面都没有动，这就叫做单页应用（SPA=SinglePageApplication)
动态更新页面？ 前端url规则 启动后，交给ajax
跟vue有什么关系？ url => page => 组件 
/book/123456



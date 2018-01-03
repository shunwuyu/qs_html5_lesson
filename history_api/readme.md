# route
restful 网站的本质就是提供资源访问
url => 资源  一一对应关系
?queryString1=a&queryString=b
backend 来做 路由规则 route
mvc 是以前后端的主要规则  负责解析url， 映射一个route 跟后端脚本对应的 controller
/book/123
/api

frontend 接管一切?
跟服务器相关性
url => 资源 缺点 http的请求
href 资源的请求  点击需要刷新页面（页面重新加载）  对网络要求高  反应速度慢  用户体验不好  PC 时代可以
https://m.taobao.com/#index  前端url设计规则  # 表示锚点 后面的东西可以发生改变
https://m.taobao.com/#home
html5 history 前面都一样  不会重新刷新界面 也能获取解决方案
前端url 每一次不再是刷新式的跳转  更像是切换一张小卡片  好像整个页面没有动  这就是单页应用 SPA（SinglePageApplication）


动态更新界面？前端url规则 启动， 交给Ajax
vue?  url => page => 组件
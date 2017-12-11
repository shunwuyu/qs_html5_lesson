## 移动手机网页高度问题
- flexible 10rem  宽度适配
- 单屏页面  
iphone6  667
iphone6 puls  746
android 在iphone 5s ->iphone 
6plus -> 480宽
一般不处理高度，  scroll-view


overflow: hidden|scroll

微信tabbar高度
微信分享的， 微信生态的，应该使用微信开发者工具调试
解决不同手机高度？
不是手机高度有问题  ，单屏， 要展示的内容不能太多，
可以用z-index加定位  去做这些事情
微信生态  ===  h5生态
基本理念， height是有可为，有可不为，
太多的内容，再放也放不下，如果安排得当
使用z-index 加 定位 就可以适当的得到在高度小的手机上，使用z-index去弥补高度不够的问题。
单屏应用 ，不能太复杂。
等比例缩放 vh rem media-query方案

h5单页应用 不要急于下手 先构图
有可能因为设计题缺少前端知识，介入进去
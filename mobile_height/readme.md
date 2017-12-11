## 移动手机网页高度问题
- flexible 10rem 宽度适配
- 单屏页面 
iphone5s 568pt
iphone6 667pt
iphone6 plus 7746pt
android 在IPhone 5s ->iphone
6 plus->480宽
一般不处理高度，scroll-view
overflow：hidden|scroll
height 哪怕是同一设备在微信里面
微信tabbar高度
微信朋友圈分享，微信生态的，应该使用微信开发者工具来进行调试
解决不同手机高度？
不是手机高度有问题，单屏，要展示的内容不能太多，可以用z-index+定位+百分比缩放来做这件事
微信生态===h5生态
基本的理念，height是有可为，有可不为，
太多的内容再放也放不下，如果安排得当，使用z-index+定位，适当的得到在高度小的手机上使用z-index去弥补高度不够的事情。
单屏应用，不能太复杂
等比例缩放，vh res media-query
h5 单屏应用不要急于下手，先构图，有可能因为设计师缺少前端知识，所以我们要介入进去

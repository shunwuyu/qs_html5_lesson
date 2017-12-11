## 移动手机网页高度问题
- flexible 10rem 宽度适配
- 单屏页面 
iphone 5s 568pt
iphone 6 667pt
iphone 6 plus 736pt
android 在iPhone 5s -> iphone 6 plus -> 480宽
一般不处理高度， scroll-view
overflow:hidden|scroll 
height 同一设备在微信里，
微信tabbar高度
微信朋友圈分享的，微信生态的，应该使用微信开发者工具调试
解决不同手机高度？
不是手机高度有问题，单屏，要展示的内容
不能太多，z-index+定位+百分比缩放去做这件事，
微信生态 === h5生态
基本的理念， height是有可为，有可不为，太多的内容，再放也放不下，如果安排得当，使用z-index+定位，在高度小的手机上，使用z-index去弥补高度不够的问题。
单屏应用，不能太复杂。
等比例缩放 vh rem media-query
## 移动手机网页高度问题
- flexible 10rem 宽度适配
- 单屏页面
iphone 5s 568pt
6 667pt
6 plus 746pt
一般不处理高度，scroll-view  overflow：hidden|scroll 
height 同一设备在微信里面有tabbar的高度，微信分享或生态的，应该使用微信开发者工具进行调试
解决不同手机高度？
不是手机高度有问题，单屏，要展示的内容不能太多，z-index+定位+百分比缩放去实现
微信生态 === html5生态
基本理念，height 是有可为 可不为的 太多的内容太多就放不下， 如果安排得当，使用z-index+定位，在高度小的手机上使用z-index去弥补高度不够的问题
单屏应用不能太复杂。
等比列缩放 vh rem media-query
h5单屏应用 不要急于下手，先构图有可能因为设计师缺少前端知识，介入进去

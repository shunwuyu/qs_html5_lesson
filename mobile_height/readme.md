## 移动手机网页高度问题
-flexible 10rem 宽度适配
- 单屏页面
  iphone 5s 568pt
  iphone 6 667pt
  iphone 6plus 746pt
  android 在iphone 5s -> iphone
  6plus -> 480宽
  一般不处理高度， scroll-view
  overflow:hidden/scroll
1. height 在同一设备微信里面，微信tabbar高度
  微信分享的，微信生态的，应使用微信开发者工具来调试
2. 解决不同手机的高度？
  不是手机高度有问题，单屏，要展示的内容不能太多，z-index+定位+百分比缩放去做这件事
  微信生态 === H5生态
  基本理念，height是有可为，有可不为，太多的内容，在放也放不下，如果安排得当 ，使用z-index+定位，在高度小的手机上，使用z-index去弥补高度不够的问题。
  单屏应用，不能太复杂。
  等比缩放 vh,rem,media-query
  h5单屏应用 不要急于下手，先构图，在这过程中有可能设计师缺少前端知识，介入进去
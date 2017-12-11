## 移动手机网页高度问题
- flexible 10rem 宽度试配
- 单屏页面
  iphone 5 568pt
  iphone 6 667pt
  iphone 6plus 736pt
  android 在iPhone 5s -> iphone 6plus -> 480宽
  一般不处理高度，scroll-view 
  overflow:hidden|scroll
  height 同一设备在微信里，有微信tabbar高度
  做的项目在微信分享的，微信生态的，应用使用的，应该使用微信开发者工具调试
  解决不同手机的高度？
  不是手机高度有问题，对于单屏，要展示的内容不能太多，z-index+定位+百分比缩放去做这件事

  微信生态 === h5生态
  基本的理念，height是有可为，有可不为，太多的内容，再放也放不下，如果安排得到，使用z-index+定位，就可以适当的得到在高度小的手机上使用z-index去弥补高度不够的问题
  单屏应用不能太复杂。
  等比例缩放 vh rem media-query
  h5 单屏应用 不要急于下手，要先构图，有可能因为缺少设计师缺少前端知识，介入进去，

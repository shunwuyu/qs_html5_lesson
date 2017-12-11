## 移动手机网页高度问题
- flexible 10rem 宽度适配
- 单屏页面 
  iphone 6 667pt
  iphone 6 plus 747pt
  android 在iphone 5s -> iphone
  6plus -> 480宽
  一般不处理高度， scroll-view overflow:hidden|scroll
  height 同一设备在微信里，微信有tabbar高度
  微信分享的，微信生态的，应使用微信开发者工具调试
  解决不同手机高度？
  不是手机高度有问题，单屏，要展示的内容不能太多，z-index+定位+百分比缩放去做这件事，
  微信生态  === h5生态
  基本理念： height是有可为，有可不为，太多的内容，再放也放不下，如果安排得当，
  使用z-index +定位，在高度小的手机上，使用z-index弥补高度不够的问题。
  单屏应用不能太复杂。
  等比例缩放： vh rem media-query
  h5单屏应用 不要急于下手，需要先构图，有可能因为设计师缺少前端知识，介入进去，
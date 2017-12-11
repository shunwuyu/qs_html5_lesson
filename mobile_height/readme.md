## 移动手机网页高度问题
- flexible 10rem 解决了所有的宽度适配
- 单屏页面 
- 如何解决高度问题 
  iPhone 5s 568pt
  iphone 6 高度是667pt
  iPhone 6 plus 746pt
  andriod 在iPhone5s -> iphone
  6plus -> 480宽

  一般不处理高度， 用scroll-view处理 overflow:hidden|scroll

  height 同一设备在微信里面，微信有tabbar高度，不能用100%来做高高度，
  做个微信分享或微信生态的，应该使用微信开发者工具调试
  
  如何解决不同手机高度的问题？
  不是手机高度有问题
  （作为单屏页面，要展示的内容不能太多）
  可以用z-index + 定位 + 百分比缩放去做这件事

  微信生态 === h5生态
  基本理念：
  height 是有可为有可不为的，太多的内容，再放也放不下。
  如果安排得当，使用 z-index + 定位 就可以在高度小的手上使用z-index去弥补高度不够的问题。
  单屏应用，不能太复杂。

  如何使用等比例缩放？ 用 vh rem media-query

  h5单屏应用 不要急于下手， 要先去构图
  构图过程中有可能因为设计师缺少前端知识，介入进去，


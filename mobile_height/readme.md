## 移动手机网页高度问题
- flexible 10rem 宽度适配
- 单屏页面 :单个页面占一个屏幕，不出现滑动条，不管什么手机。
  iphone 5s 568pt
  iphone 6 667pt
  iphone 6 plus 746pt
  android 在iphone 5s -> iPhone
  6 plus -> 480宽
  一般不处理高度，scroll-view overflow：hidd|scroll （高度有这些属性，一般不设置高度）
  height 同一设备在微信里，
  微信分享的，微信生态的，应用使用
  微信开发者工具调试
  解决不同手机高度？
  不是手机高度有问题，单屏，要展示的内容不能太多。 z-index + 定位 + 百分比缩放去做这件事，
  微信生态===h5生态
  基本理解，height是有可为，有可不为
  太多的内容，再也放不下，如果安排得当，使用z-index + 定位，在高度小的手机上，使用z-index 去弥补高度不够的问题。
  单屏应用不能太复杂。
  定比例缩放 vh（高度固定100vh） rem（宽度固定10rem） media-query（css自适应）
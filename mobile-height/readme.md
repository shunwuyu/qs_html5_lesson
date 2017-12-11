## 移动手机网页高度问题
- flexibel 10rem 宽度适配
- 单屏页面 
    iphone 6  height:667pt (pt 密度像素比)
    iphone 6 plus height:736pt
    iphone 5s height:568pt
    andriod 在iphone 5s -> iphone 6 plus ->480宽
    一般不处理高度，scroll-view
    overflow:hidden|scroll
    height 哪怕是同一设备，在微信里面，有微信的tabbar高度，如果是在微信分享的或，或微信生态的，应使用微信开发者工具调试
    解决不同手机的高度？
    不是手机高度有问题，单屏要展示的内容不能太多，z-index + 定位 +百分比缩放 去做这个事情，
    微信生态 === h5生态
    基本的理念， height 是有可为有可不为的，太多的内容，再放也放不下，如果安排得当，使用z-index + 定位 ，就可以适当的得到在高度小的手机上，使用z-index 去弥补高度不够的问题。
    单屏应用，不能太复杂。
    等比例缩放 vh rem media-query
    h5单屏应用，不要急于下手，要先去构图，在构图过程之中，有可能设计师缺少前端的知识，介入进去，


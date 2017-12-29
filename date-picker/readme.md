# 日历组件
  mocha 测试框架
  should 断言库 assertion
  安装在 devDependencies
  测试驱动开发 TDD 
  git branch
  git checkout
  master dev test 个人开发分支
  test 将进入我们的业务开发流程
  
  js babel 编译
  css stylus|sass|less
  预编译 减少体力活 变量 for 函数
  .styl => .css

  stylus -w -m styl/ -o -css/
  -m会生成css map文件，有了它，便于测试

  body margin 0 padding 0
  css reset
  normalize.css
  colors.css
  前端，后端无界限

  stylus 模块化方式， @import 将任务模块
  化划分，以_.styl 将编译到原文件，不会
  生成新文件

  stylus 为了方便省写选择器，提供了嵌套，
  以tab作为缩进，不结束缩进，里面的代码
  单元都可以引用到父类选择器。
  父子
  .parent
    .child
      .sun
  .parent .child
  css 的一个作用域块
  .parent
    &.parent_other_class
      ....
      
    ....
  .parent.parent_other_class

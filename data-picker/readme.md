# 日历组件
  mocha 测试框架
  should 断言库 assertion
  安装在 devDependencies
  测试驱动开发  TDD  属于敏捷开发的一部分
  git branch 
  git checkout
  master  dev  test   标准分支   还可以有个人开发分支
  test 将进入我们的业务开发流程

  js babel 编译
  css stylus|sass|less  预编译  减少体力活
  stylus 引入了变量、for循环、函数等概念
  .styl => .css

  stylus -w -m styl/ -o css/
  -w  监听文件的改变
  -m 生成 css map 文件，有了它 便于调试

  body margin 0 padding 0
  css reset
  normalize.css
  colors.css
  前端，后端无界限

  stylus 模块化方案， @import 将任务模块化划分，以_.styl 将会编译到原文件，不会生成新文件

  stylus 为了方便省写选择器，提供结构嵌套。
  以tab 作为缩进，不结束缩进，里面所有的代码单元都可以引用到父类选择器。
  父子关系
  .parent
    .child
      .grandson
  生成的样式是
  .parent .child .grandson
  类似于css 的一个作用域块

  .parent
    &.parent_other_class
  生成的是同级类名
  .parent.parent_other_class
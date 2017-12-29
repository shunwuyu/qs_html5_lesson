# 日历组件
  mocha 测试框架
  should 断言库 assertion
  安装在devDependencies
  测试驱动开发 TDD
  git branch 
  git checkout 切换分支
  master dev test 个人开发分支
  test 将进入我们的业务开发流程

  js 有babel 编译 
  css 有stylus|sass|less
  都叫预编译 体力活 变量 for 函数
  .styl => .css

  stylus -w -m styl/ -o css/
  便于调试代码

  body margin  padding 0
  css reset 
  normalize.css
  colors.css
  前后端统一 无界限

  stylus 模块化方案  使用 @import 将任务模块化划分 
  以_.styl文件将会编译到原文件 不会生成新文件

  stylus 为了方便 省写选择器 提供结构嵌套
  以tab 作为缩进，不结束缩进的话，里面的代码单元都可以引用到父类选择器
  父子
  .parent
    .child
      .sun
  .parent .child
  css 的一个作用域块
  .parent
    
    &.parent_other_class
      ...

    ...
mocha 测试框架
should 断言库 assertion 安装在devDependencies
测试驱动开发 TDD
git branch
git checkout
master dev test 个人开发分支
test 将进入我们的业务开发流程

> js babel 编译
> css stylus|sass|less 预编译 体力活 变量 for 函数  .styl => .css
> stylus -w -m style/ -o css/
- 生成css map文件，有了它，便于调试
body margin 0 padding 0 css reset normalize.css colors.css@2.3.0 
> 前端后端无界限
> stylus 模块化方式， @import将任务模块化，以 _.styl将会编译到原文件，不会生成新文件
> stylus 为了方便省写选择器，提供嵌套，以tab作为缩进，里面所有的代码都是子类
  .parent
    &.parent_other代表有两个css样式
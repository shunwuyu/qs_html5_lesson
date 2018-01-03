#日历组件
mocha 测试框架
should 断言库 assertion
安装在 devDependencies
git branch
git checkout
master dev test  个人开发分支
test 将进入我们的业务开发流程

js -> babel 代码的编译
css  -> stylus|sass|less
预编译 减少我们的体力活  stylus帮css引入变量，for循环以及函数的概念
.styl => .css

stylus -w -m styl/ -o css/
生成css map文件，有了它，便于调试

body{margin:0;padding:0;}
css reset
normalize.css npm包
colors.css npm包
前段、后端无界限

stylus 模块化方案，@import 将任务模块化划分，以_.styl 将会编译到原文件，不会生成新文件。

stylus 为了方便省写选择器，提供结构嵌套，以tab作为缩减，不借宿缩进，里面所有的代码单元都可以引用父类选择器。
父子
.parent
    .child
        .sun
.parent .child
css 的一个作用域
.parent
    &.parent_other_class
    ......

....




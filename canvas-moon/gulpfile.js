// commonJS 模块化项目
var gulp = require('gulp');
// 前端任务自动化脚本
// 只要在gulp中定义好任务  就会从第一个任务开始执行
// build 编译   代码从src文件夹编译到dest文件夹
gulp.task('build', function(){
    // .src 找到某个文件
    // .pipe 将文件送入流水化生产线上
    // .pipe(gulp.dest()) 将文件输出到dest目录下
    return gulp.src('./src/js/main.js')
    // ......
    .pipe(gulp.dest('./dist/js'))
});
// ['bulid'] 分成多个任务， 不管有多少任务  最后都是function
gulp.task('watch', ['build'], function() {
    gulp.watch('./src/js/*.js', ['build']);
  })
// 运行默认任务
gulp.task('default', ['watch']);
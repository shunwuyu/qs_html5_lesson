// commonJS 模块化方案
var gulp = require('gulp');
// 前端多任务自动化脚本
// build 编译 
gulp.task('build',function() {
    //找到某个文件
    return gulp.src('./src/js/main.js').pipe(gulp.dest('./dist/js'));
});
// watch监听js下的所有文件
gulp.task('watch', ['build'], function() {
  gulp.watch('./src/js/*.js', ['build']);
})
gulp.task('default', ['watch']);
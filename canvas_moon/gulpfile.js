// require 引入gulp  commonJS 模块化方案 在当前目录下引入
var gulp = require('gulp');
// 前端多任务自动化脚本   build（编译）
gulp.task('build',function () { 
//    找到某个文件 .在文件内  ..在文件外  pipe把送入一个管道 gulp会将一个文件输出到dist文件下。
//./src/js/main.js'（开发文件）  ./dist/js（编译文件
    return gulp.src('./src/js/main.js').pipe(gulp.dest('./dist/js'))
});
//watch监听 js 下的所有文件
gulp.task('watch',['build'],function () {
    gulp.watch('./src/js/*.js',['build']);
})
gulp.task('default',['watch']);
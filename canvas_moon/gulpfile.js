// commonJS模块化方案
var gulp = require('gulp');
// 前端多任务自动化脚本
gulp.task('default', function () {
    // 找到某个文件 最后输出到dest默认目录下
    return gulp.src('./src/js/main.js').pipe(gulp.dest('./dist/js'));
});

gulp.task('build', function () {
    // 编译
    return gulp.src('./src/js/main.js').pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', ['build'], function () {
    // 监听所有的开发者文件变化
    return gulp.watch('./src/js/*.js', ['build']);
   
});
gulp.task('default', ['watch']);
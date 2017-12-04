
// commonJS 模块化方案
// build 编译 
var gulp = require('gulp');
// 前端多任务自动化的脚本
gulp.task('build', function() {
    // ......
    return gulp.src('./src/js/main.js').pipe(gulp.dest("./dist/js"))
})

gulp.task('watch',['build'], function() {
    gulp.watch('./src/js/*.js', ['build'])
})

gulp.task('default', ['watch']);
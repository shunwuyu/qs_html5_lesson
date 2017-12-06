// commonJS 模块化方案
var gulp = require('gulp');
// gulp 是前端任务自动化的脚本
//build 就是编译
gulp.task('build', function() {
    // 找到某个文件
    return gulp.src('./src/js/main.js')
      // ......
      .pipe(gulp.dest('./dist/js'))
  })

gulp.task('watch',['build'], function() {
    gulp.watch('./src/js/*.js',['build']);
  })
gulp.task('default',['watch']);
 
// commonJS 模块化方案
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// 前端多任务自动化脚
// build 编译
// gulp.task('build', function() {
//   // 找到某个文件
//   return gulp.src('./src/js/main.js')
//     // ......
//     .pipe(uglify())
//     .pipe(gulp.dest('./dist/js'))
// });

gulp.task('build', function() {
  return browserify({entry: './src/js/main.js', debug: true})
    .transform('babelify', { presets: ["es2015"]})
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('watch', ['build'], function() {
  gulp.watch('./src/js/*.js', ['build']);
})
gulp.task('default', ['watch']);
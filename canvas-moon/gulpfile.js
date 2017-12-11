import { watch } from './C:/Users/ASUS.DESKTOP-S5GLIEN/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/chokidar';

// commonJS 模块化方案
var gulp = require('gulp');
// 前端任务自动化的脚本
build就是编译
gulp.task('build',function(){
    // 找到某个文件
    return gulp.src('./src/js/main.js')
    // ......
    .pipe(gulp.dest('./dist/js'))
});
gulp.task('watch',['build'],function(){
    gulp.watch('./src/js/*.js',['build']);
});
gulp.task('default',['watch']);

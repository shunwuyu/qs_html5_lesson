var gulp = require('gulp');
var browserify = require('browserify');

gulp.task('build', function() {
  browserify({entries: './src/js/main.js'})
    .bundle()
    .pipe(gulp.dest('./dist/js'))
});
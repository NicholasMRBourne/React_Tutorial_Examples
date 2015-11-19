//gulpfile.js
var gulp = require('gulp');
var browserify = require('gulp-browserify');
var reactify = require('reactify');
//compile javascript with browserify then put it in the root directory
gulp.task('b', function() {
  gulp.src('./js/app.js')
    .pipe(browserify({
       insertGlobals : true,
       transform: [
         reactify
       ]
     }))
     .pipe(gulp.dest('./'))
});
//Watch and update for changes
gulp.task('w', function() {
  gulp.watch('./js/app.js', ['b']);
})

gulp.task('default', ['b', 'w']);

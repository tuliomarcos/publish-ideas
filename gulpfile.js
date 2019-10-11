const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')

// compiler pug
gulp.task('pug', () => {
  return
    gulp
      .src('source/*.pug')
      .pipe(gulp.dest('./build'))
})

// compiler sass
sass.compiler = require('node-sass');
 
gulp.task('sass', () => {
  return gulp.src('./source/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
});
 
gulp.task('sass-watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
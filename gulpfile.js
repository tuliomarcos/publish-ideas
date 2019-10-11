const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create();

// start serve
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: "./build/"
    }
  })
})

// compiler pug
gulp.task('pug', () => {
  return gulp
  .src('./source/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./build'))
  .pipe(browserSync.stream());
})

// compiler sass
sass.compiler = require('node-sass')

gulp.task('sass', () => {
  return gulp.src('./source/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
})
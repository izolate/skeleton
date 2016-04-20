const gulp = require('gulp')
const _ = require('gulp-load-plugins')()
const cssnext = require('postcss-cssnext')
const modules = require('postcss-modules')
const sugarss = require('sugarss')

gulp.task('css', () => {
  return gulp.src(`${process.env.STATIC_DIR}/css/index.sss`)
    .pipe(_.sourcemaps.init())
    .pipe(_.postcss([
      modules,
      cssnext
    ], {
      parser: sugarss
    }))
    .pipe(_.rename({ extname: '.css' }))
    .pipe(_.sourcemaps.write('.'))
    .pipe(gulp.dest(`${process.env.STATIC_DIR}/dist`))
})

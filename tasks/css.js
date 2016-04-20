const gulp = require('gulp')
const _ = require('gulp-load-plugins')()
const cssnext = require('postcss-cssnext')
const modules = require('postcss-modules')

const rupture = require('rupture')

gulp.task('css', () => {
  return gulp.src(`${process.env.STATIC_DIR}/css/index.css`)
    .pipe(_.sourcemaps.init())
    .pipe(_.postcss([
      modules,
      cssnext
    ]))
    .pipe(_.sourcemaps.write('.'))
    .pipe(gulp.dest(`${process.env.STATIC_DIR}/dist`))
})

gulp.task('old-css', () => {
  return gulp.src(`${process.env.STATIC_DIR}/styl/index.styl`)
    .pipe(plugins.stylus({
      use: [rupture()]
    }))
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csso())
    .pipe(gulp.dest(`${process.env.STATIC_DIR}/dist`))
})

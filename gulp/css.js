const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()
const rupture = require('rupture')

gulp.task('css', () => {
  return gulp.src(`${process.env.STATIC_DIR}/styl/index.styl`)
    .pipe(plugins.stylus({
      use: [rupture()]
    }))
    .pipe(plugins.autoprefixer())
    .pipe(plugins.csso())
    .pipe(gulp.dest(`${process.env.STATIC_DIR}/dist`))
})

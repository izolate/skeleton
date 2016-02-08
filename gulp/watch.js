const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()

gulp.task('watch', () => {
  gulp.watch(`${process.env.STATIC_DIR}/styl/**/*.styl`, ['css'])
  gulp.watch(`${process.env.STATIC_DIR}/js/**/*.js`, ['js'])
})

const gulp = require('gulp')

gulp.task('watch', () => {
  gulp.watch(`${process.env.STATIC_DIR}/styl/**/*.styl`, ['css'])
  gulp.watch(`${process.env.STATIC_DIR}/js/**/*.js`, ['js'])
})

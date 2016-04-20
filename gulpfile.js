'use strict'

require('dotenv').load()
const gulp = require('gulp')
const tasks = ['css', 'js']

require('require-dir')('./tasks', { recurse: true })

gulp.task('develop', tasks.concat(['watch']))
gulp.task('build', tasks)

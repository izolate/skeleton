require('dotenv').load()
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

// Configuration
app.set('port', process.env.NODE_PORT || 3000)
app.set('views', __dirname)
app.set('view engine', 'pug')
app.use('/dist', express.static(`${__dirname}/client/dist`))
app.locals.pretty = (process.env.MINIFY === 'false')

// Body parsing & Cookies
app.use(bodyParser.urlencoded({ extended: false })) // application/x-www-form-urlencoded
app.use(bodyParser.json()) // application/json
app.use(cookieParser())

// Routes
app.use('/', require('./routes'))
app.use('/module', require('./module/routes'))

// Run
app.listen(app.get('port'), err => {
  if (err) console.error(err)
  else console.log(`Server started: http://localhost:${app.get('port')}/`)
})

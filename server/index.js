// Environment variables
import dotenv from 'dotenv'
dotenv.load()

// Imports
import Koa from 'koa'
import Pug from 'koa-pug'
import route from 'koa-route'
import serve from 'koa-static'
import mount from 'koa-mount'
import json from 'koa-json'
import path from 'path'
import api from './api/routes'

const pretty = process.env.NODE_ENV === 'development'

// Initialise
const app = new Koa()
const pug = new Pug({
  viewPath: path.resolve(__dirname, '../server'),
  pretty
})

// Configuration
pug.use(app)
app.use(mount('/dist', serve(path.resolve(__dirname, '../dist'))))
app.use(json({ pretty }))

// Routes
app.use(api.routes())
app.use(api.allowedMethods())
app.use(route.get('*', async (ctx) => ctx.render('layout')))

// Settings
app.port = process.env.NODE_PORT || 3000
app.name = process.env.APP_NAME || 'skeleton'

// Run
app.listen(app.port)
console.log(`[${app.env}] ${app.name} listening on port ${app.port}`)

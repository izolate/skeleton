/**
 * Routes for an example module
 */
const router = module.exports = require('express').Router()

router.use((req, res, next) => {
  // route-specific middleware
  next()
})

router.get('/endpoint', (req, res, next) => {
  res.json({ message: 'Hello World!' })
})

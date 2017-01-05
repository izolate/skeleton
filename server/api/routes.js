const router = module.exports = require('express').Router()

// route-specific middleware
router.use((req, res, next) => {
  next()
})

router.get('/endpoint', (req, res, next) => {
  res.json({ message: 'Hello World!' })
})

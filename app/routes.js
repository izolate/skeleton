const router = module.exports = require('express').Router()

// Hello World!
router.get('/', (req, res, next) => res.render('pages/home'))

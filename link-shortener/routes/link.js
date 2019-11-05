const express = require('express')
const router = express.Router()

router.post('/create', (req, res, next) => {
  res.render('index', {original : req.body.original, custom : req.body.custom, status : true})
})

module.exports = router
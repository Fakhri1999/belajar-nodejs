const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', {title:'Index'})
})

router.post('/tes-param/:id', (req, res) => {
  res.send(req.params.id)
})

module.exports = router
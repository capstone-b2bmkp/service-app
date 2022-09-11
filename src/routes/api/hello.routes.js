const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('EN LA APIII')
  res.status(200).send('Hello World!')
})

module.exports = router

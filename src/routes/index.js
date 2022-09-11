const express = require('express')
const router = express.Router()

const helloRoutes = require('./api/hello.routes')

router.use('/hello', helloRoutes)

module.exports = router

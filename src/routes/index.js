const express = require('express')
const router = express.Router()

const userRoutes = require('./api/user.routes')
const productRoutes = require('./api/product.routes')

router.use('/user', userRoutes)
router.use('/product', productRoutes)

module.exports = router

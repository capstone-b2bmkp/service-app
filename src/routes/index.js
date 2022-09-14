const express = require('express')
const router = express.Router()

const userRoutes = require('./api/user.routes')
const productRoutes = require('./api/product.routes')
const commentRoutes = require('./api/comment.routes')
const categoryRoutes = require('./api/categories.routes')
const cartRoutes = require('./api/cart.routes')
const cartitemRoutes = require('./api/cartitem.routes')

router.use('/user', userRoutes)
router.use('/product', productRoutes)
router.use('/comment', commentRoutes)
router.use('/category', categoryRoutes)
router.use('/cart', cartRoutes)
router.use('/cartitem', cartitemRoutes)

module.exports = router

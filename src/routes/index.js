const express = require('express')
const router = express.Router()

const userRoutes = require('./api/user.routes')
const productRoutes = require('./api/product.routes')
const commentRoutes = require('./api/comment.routes')
const categoryRoutes = require('./api/categories.routes')

router.use('/user', userRoutes)
router.use('/product', productRoutes)
router.use('/comment', commentRoutes)
router.use('/category', categoryRoutes)

module.exports = router

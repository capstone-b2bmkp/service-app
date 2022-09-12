const express = require('express')
const { indexProduct, createProduct, updateProduct, deleteProduct } = require('../../controllers/products.controller')

const router = express.Router()

router.get('/', indexProduct)

router.post('/', createProduct)

router.put('/', updateProduct)

router.delete('/', deleteProduct)

module.exports = router

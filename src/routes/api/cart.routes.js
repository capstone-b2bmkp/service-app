const express = require('express')
const { indexCart, createCart, updateCart, deleteCart } = require('../../controllers/carts.controller')

const router = express.Router()

router.get('/', indexCart)

router.post('/', createCart)

router.put('/', updateCart)

router.delete('/', deleteCart)

module.exports = router

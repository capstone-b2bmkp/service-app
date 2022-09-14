const express = require('express')
const { indexCartitem, createCartitem, updateCartitem, deleteCartitem } = require('../../controllers/cartitems.controller')

const router = express.Router()

router.get('/', indexCartitem)

router.post('/', createCartitem)

router.put('/', updateCartitem)

router.delete('/', deleteCartitem)

module.exports = router

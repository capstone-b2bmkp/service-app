const express = require('express')
const { indexCategory, createCategory, updateCategory, deleteCategory } = require('../../controllers/categorys.controller')

const router = express.Router()

router.get('/', indexCategory)

router.post('/', createCategory)

router.put('/', updateCategory)

router.delete('/', deleteCategory)

module.exports = router

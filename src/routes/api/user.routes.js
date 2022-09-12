const express = require('express')
const { indexUser, createUser, updateUser, deleteUser } = require('../../controllers/users.controller')

const router = express.Router()

router.get('/', indexUser)

router.post('/', createUser)

router.put('/', updateUser)

router.delete('/', deleteUser)

module.exports = router

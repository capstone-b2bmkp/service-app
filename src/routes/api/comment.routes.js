const express = require('express')
const { indexComment, createComment, updateComment, deleteComment } = require('../../controllers/comments.controller')

const router = express.Router()

router.get('/', indexComment)

router.post('/', createComment)

router.put('/', updateComment)

router.delete('/', deleteComment)

module.exports = router

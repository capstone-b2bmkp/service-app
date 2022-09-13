const { Comment, User } = require('../models')

const indexComment = async (req, res) => {
  console.log('estoy en indexComment controller')
  try {
    const comments = await Comment.findAll()
    res.status(201).json({ data: comments })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

// eslint-disable-next-line max-lines-per-function
const createComment = async (req, res) => {
  console.log('estoy en createComment controller')
  const { userId, productId, rating, content } = req.body
  try {
    const user = await User.findOne({ where: { id: userId } })
    if (!user) {
      return res.status(404).json({
        message: `User with id ${userId} not found`
      })
    }
    await Comment.create({
      userId,
      productId,
      rating,
      content
    })
    res.status(201).json({
      message: 'Comentario creado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateComment = async (req, res) => {
  console.log('estoy en updateComment controller')
  try {
    const { id, userId, productId, rating, content } = req.body
    const comment = await Comment.findOne({ where: { id: id } })
    if (!comment) {
      return res.status(404).json({
        message: `Comment with id ${id} not found`
      })
    }
    const updates = {}
    if (userId) {
      updates.userId = userId
    }
    if (productId) {
      updates.productId = productId
    }
    if (rating) {
      updates.rating = rating
    }
    if (content) {
      updates.content = content
    }
    await Comment.update(updates, { where: { id: id } })
    res.status(201).json({
      message: 'Comentario actualizado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteComment = async (req, res) => {
  console.log('estoy en deleteComment controller')
  try {
    const { id } = req.body
    const comment = await Comment.findOne({ where: { id: id } })
    if (!comment) {
      return res.status(404).json({
        message: `Comment with id ${id} not found`
      })
    }
    await Comment.destroy({ where: { id: id } })
    res.status(201).json({
      message: 'Comentario eliminado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = { indexComment, createComment, updateComment, deleteComment }

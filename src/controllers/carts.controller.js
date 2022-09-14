const { Cart } = require('../models')

const indexCart = async (req, res) => {
  console.log('estoy en indexCart controller')
  try {
    const carts = await Cart.findAll()
    res.status(201).json({ data: carts })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

// eslint-disable-next-line max-lines-per-function
const createCart = async (req, res) => {
  console.log('estoy en createCart controller')
  const { userId } = req.body
  try {
    await Cart.create({
      userId
    })
    res.status(201).json({
      message: 'Cart created successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateCart = async (req, res) => {
  console.log('estoy en updateCart controller')
  try {
    const { id, userId } = req.body
    const cart = await Cart.findOne({ where: { id: id } })
    if (!cart) {
      return res.status(404).json({
        message: `Cart with id ${id} not found`
      })
    }
    const updates = {}
    if (userId) {
      updates.userId = userId
    }
    await Cart.update(updates, { where: { id: id } })
    res.status(201).json({
      message: 'Cart updated successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteCart = async (req, res) => {
  console.log('estoy en deleteCart controller')
  try {
    const { id } = req.body
    const cart = await Cart.findOne({ where: { id: id } })
    if (!cart) {
      return res.status(404).json({
        message: `Cart with id ${id} not found`
      })
    }
    await Cart.destroy({ where: { id: id } })
    res.status(201).json({
      message: 'Cart deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = { indexCart, createCart, updateCart, deleteCart }

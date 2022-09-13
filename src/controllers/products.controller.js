const { Product, User } = require('../models')

const indexProduct = async (req, res) => {
  console.log('estoy en indexProduct controller')
  try {
    const products = await Product.findAll()
    res.status(201).json({ data: products })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const createProduct = async (req, res) => {
  console.log('estoy en createProduct controller')
  const { userId, categoryId, name, currentPrice, currentAvailable, imageUrl } = req.body
  try {
    const user = await User.findOne({ where: { id: userId } })
    if (!user) {
      return res.status(404).json({
        message: `User with id ${userId} not found`
      })
    }
    await Product.create({
      userId,
      categoryId,
      name,
      currentPrice,
      currentAvailable,
      imageUrl
    })
    res.status(201).json({
      message: 'Producto creado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  };
}

const updateProduct = async (req, res) => {
  console.log('estoy en updateProduct controller')
  try {
    const { id, userId, categoryId, name, currentPrice, currentAvailable, imageUrl } = req.body
    const product = await Product.findOne({ where: { id: id } })
    if (!product) {
      return res.status(404).json({
        message: `Product with id ${id} not found`
      })
    }
    const updates = {}
    if (userId) {
      updates.userId = userId
    }
    if (categoryId) {
      updates.categoryId = categoryId
    }
    if (name) {
      updates.name = name
    }
    if (currentPrice) {
      updates.currentPrice = currentPrice
    }
    if (currentAvailable) {
      updates.currentAvailable = currentAvailable
    }
    if (imageUrl) {
      updates.imageUrl = imageUrl
    }
    await Product.update(updates, { where: { id: id } })
    res.status(200).json({
      message: 'Product updated successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteProduct = async (req, res) => {
  console.log('estoy en deleteProduct controller')
  try {
    const { id } = req.body
    const product = await Product.findOne({ where: { id: id } })
    if (!product) {
      return res.status(404).json({
        message: `Product with id ${id} not found`
      })
    }
    await Product.destroy({ where: { id: id } })
    res.status(200).json({
      message: 'Product deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = { indexProduct, createProduct, updateProduct, deleteProduct }

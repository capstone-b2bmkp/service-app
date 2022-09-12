const { Product, User } = require('../models')

const indexProduct = async (req, res) => {
  console.log('estoy en indexProduct controller')
}

const createProduct = async (req, res) => {
  console.log('estoy en createProduct controller')
  const { userId, name, currentPrice, currentAvailable, imageUrl } = req.body
  try {
    await Product.create({
      userId,
      name,
      currentPrice,
      currentAvailable,
      imageUrl
    })
    const user = await User.findOne({
      where: {
        id: 1
      }
    })
    console.log('DDDDDD:')
    console.log(await user.getProducts())
    res.status(201).json({
      message: 'Producto creado correctamente'
    })
    // console.log(product.getUser())
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  };
}

const updateProduct = async (req, res) => {
  console.log('estoy en updateProduct controller')
}

const deleteProduct = async (req, res) => {
  console.log('estoy en deleteProduct controller')
}

module.exports = { indexProduct, createProduct, updateProduct, deleteProduct }

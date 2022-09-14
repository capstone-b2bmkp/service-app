const { Cartitem } = require('../models')

const indexCartitem = async (req, res) => {
  console.log('estoy en indexCartitem controller')
  try {
    const cartitems = await Cartitem.findAll()
    res.status(201).json({ data: cartitems })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

// eslint-disable-next-line max-lines-per-function
const createCartitem = async (req, res) => {
  console.log('estoy en createCartitem controller')
}

const updateCartitem = async (req, res) => {
  console.log('estoy en updateCartitem controller')
}

const deleteCartitem = async (req, res) => {
  console.log('estoy en deleteCartitem controller')
}

module.exports = { indexCartitem, createCartitem, updateCartitem, deleteCartitem }

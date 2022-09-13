const { User } = require('../models')

const indexUser = async (req, res) => {
  console.log('estoy en indexUser controller')
}

// eslint-disable-next-line max-lines-per-function
const createUser = async (req, res) => {
  console.log('estoy en createUser controller')
  const { name, password, email, phoneNumber, deliveryAddress, image, discount, isAdmin } = req.body
  try {
    await User.create({
      name,
      password,
      email,
      phoneNumber,
      deliveryAddress,
      image,
      discount,
      isAdmin
    })
    res.status(201).json({
      message: 'Usuario creado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  };
}

const updateUser = async (req, res) => {
  console.log('estoy en updateUser controller')
  try {
    const { id, name, email, phoneNumber, deliveryAddress, image, discount, isAdmin } = req.body
    const user = await User.findOne({ where: { id: id } })
    if (!user) {
      return res.status(404).json({
        message: `User with id ${id} not found`
      })
    }
    const updates = {}
    if (name) {
      updates.name = name
    }
    if (email) {
      updates.email = email
    }
    if (phoneNumber) {
      updates.phoneNumber = phoneNumber
    }
    if (deliveryAddress) {
      updates.deliveryAddress = deliveryAddress
    }
    if (image) {
      updates.image = image
    }
    if (discount) {
      updates.discount = discount
    }
    if (isAdmin) {
      updates.isAdmin = isAdmin
    }
    await User.update(updates, { where: { id: id } })
    res.status(200).json({
      message: 'User updated successfully'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body
    const user = await User.findOne({ where: { id: id } })
    if (!user) {
      return res.status(404).json({
        message: `User with id ${id} not found`
      })
    }
    await User.destroy({
      where: { id: id }
    })
    res.status(200).send('User deleted successfully')
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  };
}

module.exports = { indexUser, createUser, updateUser, deleteUser }

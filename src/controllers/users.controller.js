const { User } = require('../models')

const indexUser = async (req, res) => {
  console.log('estoy en indexUser controller')
}

const createUser = async (req, res) => {
  console.log('estoy en createUser controller')
  const { name, password, email, phoneNumber, deliveryAddress, image, discount, admin } = req.body
  console.log(name, password, email, phoneNumber, deliveryAddress, image, discount, admin)
  try {
    await User.create({
      name,
      password,
      email,
      phoneNumber,
      deliveryAddress,
      image,
      discount,
      admin
    })
    res.status(201).json({
      message: 'Usuario creado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: 'Las contraseñas no coinciden'
    })
  };
}

const updateUser = async (req, res) => {
  console.log('estoy en updateUser controller')
}

const deleteUser = async (req, res) => {
  console.log('estoy en deleteUser controller')
}

module.exports = { indexUser, createUser, updateUser, deleteUser }

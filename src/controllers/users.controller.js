const { User } = require('../models')

const indexUser = async (req, res) => {
  console.log('estoy en indexUser controller')
}

// eslint-disable-next-line max-lines-per-function
const createUser = async (req, res) => {
  console.log('estoy en createUser controller')
  const { name, password, email, phoneNumber, deliveryAddress, image, discount, isAdmin } = req.body
  console.log(name, password, email, phoneNumber, deliveryAddress, image, discount, isAdmin)
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
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.body
    console.log('IDDDDDD:')
    console.log(id)
    // const user = await User.findOne({where: {id: id}})
    // console.log(user.name)
    await User.destroy({
      where: { id: id }
    })
    res.status(200).send('Deleting a user!')
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  };
}

module.exports = { indexUser, createUser, updateUser, deleteUser }

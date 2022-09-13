const { Category } = require('../models')

const indexCategory = async (req, res) => {
  console.log('estoy en indexCategory controller')
  try {
    const categories = await Category.findAll()
    res.status(201).json({ data: categories })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

// eslint-disable-next-line max-lines-per-function
const createCategory = async (req, res) => {
  console.log('estoy en createCategory controller')
  const { name } = req.body
  try {
    await Category.create({
      name
    })
    res.status(201).json({
      message: 'Categoria creada correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateCategory = async (req, res) => {
  console.log('estoy en updateCategory controller')
  try {
    const { id, name } = req.body
    const category = await Category.findOne({ where: { id: id } })
    if (!category) {
      return res.status(404).json({
        message: `Category with id ${id} not found`
      })
    }
    const updates = {}
    if (name) {
      updates.name = name
    }
    await Category.update(updates, { where: { id: id } })
    res.status(201).json({
      message: 'Categoria actualizada correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteCategory = async (req, res) => {
  console.log('estoy en deleteCategory controller')
  try {
    const { id } = req.body
    const category = await Category.findOne({ where: { id: id } })
    if (!category) {
      return res.status(404).json({
        message: `Category with id ${id} not found`
      })
    }
    await Category.destroy({ where: { id: id } })
    res.status(201).json({
      message: 'Categoria eliminada correctamente'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = { indexCategory, createCategory, updateCategory, deleteCategory }

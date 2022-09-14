'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cartitem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Cartitem.belongsTo(models.Cart, {
        foreignKey: 'cartId',
        as: 'cart',
        onDelete: 'CASCADE'
      })
      Cartitem.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
        onDelete: 'CASCADE'
      })
    }
  }
  Cartitem.init({
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cartitem'
  })
  return Cartitem
}

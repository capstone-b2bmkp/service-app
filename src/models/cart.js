'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Cart.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'owner',
        onDelete: 'CASCADE'
      })
      Cart.hasMany(models.Cartitem, {
        foreignKey: 'cartId',
        as: 'cartitems',
        onDelete: 'CASCADE'
      })
    }
  }
  Cart.init({
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart'
  })
  return Cart
}

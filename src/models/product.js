'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      Product.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'owner',
        onDelete: 'CASCADE'
      })
      Product.hasMany(models.Comment, {
        foreignKey: 'productId',
        as: 'comments',
        onDelete: 'CASCADE'
      })
      Product.hasMany(models.Cartitem, {
        foreignKey: 'productId',
        as: 'cartitems',
        onDelete: 'CASCADE'
      })
    }
  }
  Product.init({
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    currentPrice: DataTypes.INTEGER,
    currentAvailable: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product'
  })
  return Product
}

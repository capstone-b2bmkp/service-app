import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Product extends Model {}

Product.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  currentPrice: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  discountPercentage: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  offerPrice: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  currentAvailable: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Product',
  paranoid: true
});

export default Product;

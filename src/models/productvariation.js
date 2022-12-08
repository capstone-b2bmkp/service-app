import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class ProductVariation extends Model {}

ProductVariation.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  SKU: {
    type: DataTypes.STRING,
    allowNull: true
  },
  SKUquoter: {
    type: DataTypes.STRING,
    allowNull: true
  },
  currentAvailable: {
    type: DataTypes.INTEGER,
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
  colorId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  sizeId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  materialId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  genderId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'ProductVariation',
  paranoid: true
});

export default ProductVariation;

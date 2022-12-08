import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Purchase extends Model {}

Purchase.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  quoterPurchaseId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  buyerId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  sellerId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deliveryStatus: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Purchase'
});

export default Purchase;

import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Purchaseitem extends Model {}

Purchaseitem.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  purchaseId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  variationId: {
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
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Purchaseitem'
});

export default Purchaseitem;

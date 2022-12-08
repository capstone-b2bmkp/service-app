import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Creditline extends Model {}

Creditline.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  sellerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  buyerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Creditline'
});

export default Creditline;

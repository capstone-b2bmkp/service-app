import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Discountrule extends Model {}

Discountrule.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  minimum: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  maximum: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true
  },
  discount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'Discountrule'
});

export default Discountrule;

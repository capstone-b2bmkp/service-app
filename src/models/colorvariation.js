import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Colorvariation extends Model {}

Colorvariation.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  colorId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Colorvariation'
});

export default Colorvariation;

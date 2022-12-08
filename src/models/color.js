import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Color extends Model {}

Color.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Color'
});

export default Color;

import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Size extends Model {}

Size.init({
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
  modelName: 'Size'
});

export default Size;

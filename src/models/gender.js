import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Gender extends Model {}

Gender.init({
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
  modelName: 'Gender'
});

export default Gender;

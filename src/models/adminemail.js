import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Adminemail extends Model {}

Adminemail.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Adminemail'
});

export default Adminemail;

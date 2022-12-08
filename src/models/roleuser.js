import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Roleuser extends Model {}

Roleuser.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Roleuser'
});

export default Roleuser;

import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Affiliationcode extends Model {}

Affiliationcode.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Affiliationcode'
});

export default Affiliationcode;

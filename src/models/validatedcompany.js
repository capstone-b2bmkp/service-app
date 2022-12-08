import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Validatedcompany extends Model {}

Validatedcompany.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  companyId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isValidated: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Validatedcompany'
});

export default Validatedcompany;

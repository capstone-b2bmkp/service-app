import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Material extends Model {}

Material.init({
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
  modelName: 'Material'
});

export default Material;

import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Image extends Model {}

Image.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Image'
});

export default Image;

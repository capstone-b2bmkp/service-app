import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';
import Category from './category';

class Company extends Model {}

Company.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  rut: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  volumeDiscount: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  topic: {
    type: DataTypes.STRING,
    allowNull: true
  },
  token: {
    type: DataTypes.STRING,
    allowNull: true
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

}, {
  sequelize,
  modelName: 'Company'
});

export default Company;

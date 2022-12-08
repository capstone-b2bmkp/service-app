// 'use strict';
import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Invoice extends Model {}

Invoice.init({
  id: {
    type: DataTypes.STRING,
    autoIncrement: true,
    primaryKey: true
  },
  purchaseId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  holding: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rut: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  topic: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direction: {
    type: DataTypes.STRING,
    allowNull: false
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false
  },
  district: {
    type: DataTypes.STRING,
    allowNull: false
  },
  file: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Invoice'
});
export default Invoice;

import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize';

class Quoterpurchase extends Model {}

Quoterpurchase.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  deliveryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cost: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  orderId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sessionId: {
    type: DataTypes.STRING,
    allowNull: true
  },
  transbankToken: {
    type: DataTypes.STRING,
    allowNull: true
  },
  transbankUrl: {
    type: DataTypes.STRING,
    allowNull: true
  },
  transbankAuthorizationCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  transbankTransactionDate: {
    type: DataTypes.STRING,
    allowNull: true
  },
  transbankTypePayment: {
    type: DataTypes.STRING,
    allowNull: true
  },
  transbankInstallmentsNumber: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  transbankCardNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  paymentStatus: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Quoterpurchase'
});

export default Quoterpurchase;

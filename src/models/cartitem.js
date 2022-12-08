import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Cartitem extends Model {}

Cartitem.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  variationId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Cartitem'
});

export default Cartitem;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Cartitem extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       // define association here
//       Cartitem.belongsTo(models.Cart, {
//         foreignKey: 'cartId',
//         as: 'cart',
//         onDelete: 'CASCADE'
//       });
//       Cartitem.belongsTo(models.Product, {
//         foreignKey: 'productId',
//         as: 'product',
//         onDelete: 'CASCADE'
//       });
//     }
//   }
//   Cartitem.init({
//     cartId: DataTypes.INTEGER,
//     productId: DataTypes.INTEGER,
//     amount: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Cartitem'
//   });
//   return Cartitem;
// };

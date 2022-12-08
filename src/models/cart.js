import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Cart extends Model {}

Cart.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Cart'
});

export default Cart;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Cart extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       // define association here
//       Cart.belongsTo(models.User, {
//         foreignKey: 'userId',
//         as: 'owner',
//         onDelete: 'CASCADE'
//       });
//       Cart.hasMany(models.Cartitem, {
//         foreignKey: 'cartId',
//         as: 'cartitems',
//         onDelete: 'CASCADE'
//       });
//     }
//   }
//   Cart.init({
//     userId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Cart'
//   });
//   return Cart;
// };

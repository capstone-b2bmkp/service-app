import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Chat extends Model {}

Chat.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  buyerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sellerId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Chat'
});

export default Chat;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Chat extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       // define association here
//       Chat.hasMany(models.Message, {
//         foreignKey: 'chatId',
//         as: 'messages'
//       });
//       Chat.belongsTo(models.User, {
//         foreignKey: 'buyerId',
//         as: 'buyer'
//       });
//       Chat.belongsTo(models.User, {
//         foreignKey: 'sellerId',
//         as: 'seller'
//       });
//     }
//   }
//   Chat.init({
//     buyerId: DataTypes.INTEGER,
//     sellerId: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'Chat'
//   });
//   return Chat;
// };

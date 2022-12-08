import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Message extends Model {}

Message.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  chatId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'Message'
});

export default Message;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Message extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       // define association here
//       Message.belongsTo(models.User, {
//         foreignKey: 'userId',
//         as: 'user'
//       });
//       Message.belongsTo(models.Chat, {
//         foreignKey: 'chatId',
//         as: 'chat'
//       });
//     }
//   }
//   Message.init({
//     userId: DataTypes.INTEGER,
//     chatId: DataTypes.INTEGER,
//     content: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Message'
//   });
//   return Message;
// };

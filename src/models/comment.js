import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'Comment'
});

export default Comment;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Comment extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       // define association here
//       Comment.belongsTo(models.User, {
//         foreignKey: 'userId',
//         as: 'owner',
//         onDelete: 'CASCADE'
//       });
//       Comment.belongsTo(models.Product, {
//         foreignKey: 'productId',
//         as: 'product',
//         onDelete: 'CASCADE'
//       });
//     }
//   }
//   Comment.init({
//     userId: DataTypes.INTEGER,
//     productId: DataTypes.INTEGER,
//     rating: DataTypes.INTEGER,
//     content: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Comment'
//   });
//   return Comment;
// };

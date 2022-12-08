import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Frecuentquestion extends Model {}

Frecuentquestion.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT
  },
  answer: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'Frecuentquestion'
});

export default Frecuentquestion;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Frecuentquestion extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       // define association here
//       Frecuentquestion.belongsTo(models.User, {
//         foreignKey: 'userId',
//         as: 'user'
//       });
//     }
//   }
//   Frecuentquestion.init({
//     userId: DataTypes.INTEGER,
//     content: DataTypes.TEXT,
//     answer: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Frecuentquestion'
//   });
//   return Frecuentquestion;
// };

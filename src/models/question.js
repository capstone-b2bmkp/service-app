import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Question extends Model {}

Question.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  topic: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Question'
});

export default Question;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Question extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       // define association here
//       Question.belongsTo(models.User, {
//         foreignKey: 'userId',
//         as: 'user'
//       });
//       Question.hasOne(models.Answer, {
//         foreignKey: 'questionId',
//         as: 'answers'
//       });
//     }
//   }
//   Question.init({
//     userId: DataTypes.INTEGER,
//     description: DataTypes.TEXT,
//     topic: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Question'
//   });
//   return Question;
// };

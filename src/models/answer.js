import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Answer extends Model {}

Answer.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'Answer'
});

export default Answer;

// module.exports = (sequelize, DataTypes) => {
//   class Answer extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       // define association here
//       Answer.belongsTo(models.User, {
//         foreignKey: 'userId',
//         as: 'user'
//       });
//       Answer.belongsTo(models.Question, {
//         foreignKey: 'questionId',
//         as: 'question'
//       });
//     }
//   }
//   Answer.init({
//     userId: DataTypes.INTEGER,
//     questionId: DataTypes.INTEGER,
//     content: DataTypes.TEXT
//   }, {
//     sequelize,
//     modelName: 'Answer'
//   });
//   return Answer;
// };

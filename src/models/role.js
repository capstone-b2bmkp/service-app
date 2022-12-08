import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Role extends Model {}

Role.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false

  }
}, {
  sequelize,
  modelName: 'Role'
});

export default Role;

// 'use strict';
// const {
//  Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//  class Role extends Model {
//    /**
//     * Helper method for defining associations.
//     * This method is not a part of Sequelize lifecycle.
//     * The `models/index` file will call this method automatically.
//     */
//    static associate (models) {
//      // define association here
//      Role.hasMany(models.Roleuser, {
//        foreignKey: 'roleId',
//        as: 'roleusers'
//      });
//    }
//   }
//   Role.init({
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Role'
//   });
//   return Role;
// };

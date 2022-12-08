import { Model, DataTypes } from 'sequelize';

import sequelize from '../config/sequelize';

class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  parentId: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'Category'
});

export default Category;

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Category extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       // define association here
//       Category.hasMany(models.Product, {
//         foreignKey: 'categoryId',
//         as: 'products',
//         onDelete: 'CASCADE'
//       });
//       Category.hasMany(models.Purchaseitem, {
//         foreignKey: 'categoryId',
//         as: 'purchaseitems',
//         onDelete: 'CASCADE'
//       });
//     }
//   }
//   Category.init({
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Category'
//   });
//   return Category;
// };

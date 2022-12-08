import { getSubCategoryIds } from '../../helpers/categories/getSubCategoryIds';
import models from '../../models';
const { Op } = require('sequelize');

export const queryFilter = async (filters, option) => {
  const {
    categoryId, minPrice, maxPrice, companies, colors, sizes, genders, materials, name
  } = filters;

  console.log('filters', filters);
  console.log('option', option);

  const where = {};
  const whereAttributes = {};
  let categoryIds = [];
  where[Op.and] = [];
  whereAttributes[Op.and] = [];
  if (categoryId) {
    const category = await models.Category.findOne({ where: { id: categoryId } });

    // All children categories of the category input
    const subCategoryIds = await getSubCategoryIds(category);
    categoryIds = subCategoryIds;

    where[Op.and].push({
      categoryId: {
        [Op.in]: subCategoryIds
      }
    });
    if (option === 'category') {
      whereAttributes[Op.and].push({
        categoryId: {
          [Op.in]: subCategoryIds
        }
      });
    }
  }
  if (name) {
    where[Op.and].push({
      name: {
        [Op.like]: `%${name}%`
      }
    });
    whereAttributes[Op.and].push({
      name: {
        [Op.like]: `%${name}%`
      }
    });
  }
  if (companies && companies.length > 0) {
    where[Op.and].push({
      companyId: {
        [Op.in]: companies
      }
    });
    if (option === 'company') {
      whereAttributes[Op.and].push({
        companyId: {
          [Op.in]: companies
        }
      });
    }
  }
  if (colors && colors.length > 0) {
    const colorIds = await models.Color.findAll({
      where: { name: colors },
      attributes: ['id'],
      raw: true
    });
    console.log('colorIds', colorIds, colors);
    where[Op.and].push({
      '$productvariations.colorId$': {
        [Op.in]: colorIds.map((color) => color.id)
      }
    });
  }
  if (sizes && sizes.length > 0) {
    const sizeIds = await models.Size.findAll({
      where: { name: sizes },
      attributes: ['id'],
      raw: true
    });
    where[Op.and].push({
      '$productvariations.sizeId$': {
        [Op.in]: sizeIds.map((size) => size.id)
      }
    });
  }
  if (genders && genders.length > 0) {
    const genderIds = await models.Gender.findAll({
      where: { name: genders },
      attributes: ['id'],
      raw: true
    });
    where[Op.and].push({
      '$productvariations.genderId$': {
        [Op.in]: genderIds.map((gender) => gender.id)
      }
    });
  }
  if (materials && materials.length > 0) {
    const materialIds = await models.Material.findAll({
      where: { name: materials },
      attributes: ['id'],
      raw: true
    });
    where[Op.and].push({
      '$productvariations.materialId$': {
        [Op.in]: materialIds.map((material) => material.id)
      }
    });
  }
  if (minPrice) {
    where[Op.and].push({
      '$productvariations.currentPrice$': {
        [Op.gte]: minPrice
      }
    });
    whereAttributes[Op.and].push({
      '$productvariations.currentPrice$': {
        [Op.gte]: minPrice
      }
    });
  }
  if (maxPrice) {
    where[Op.and].push({
      '$productvariations.currentPrice$': {
        [Op.lte]: maxPrice
      }
    });
    whereAttributes[Op.and].push({
      '$productvariations.currentPrice$': {
        [Op.lte]: maxPrice
      }
    });
  }
  where[Op.and].push({
    isActive: true
  });
  whereAttributes[Op.and].push({
    isActive: true
  });

  console.log('where query:', where);
  console.log('whereAttributes 1', whereAttributes);
  return { where, whereAttributes, categoryIds };
};

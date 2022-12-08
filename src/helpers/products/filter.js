import models from '../../models';
import { queryFilter } from '../../helpers/products/queryFilter';
const { Op } = require('sequelize');

export const filter = async (filters, option) => {
  const pageSize = 36;
  const { companies } = filters;
  let { page } = filters;

  const { where, whereAttributes, categoryIds } = await queryFilter(filters, option);

  const productsCount = await models.Product.count(
    {
      where,
      include:
      [{
        model: models.ProductVariation,
        as: 'productvariations',
        duplicating: false
      }]
    }
  );
  const pages = Math.ceil(productsCount / pageSize);

  if (!pages || page > pages) {
    page = 1;
  }

  const products = await models.Product.findAll(
    {
      where,
      limit: pageSize,
      offset: (page - 1) * pageSize,
      include:
      [{
        model: models.ProductVariation,
        as: 'productvariations',
        duplicating: false
      }]
    }
  );

  // Products filtered only on product attributes (category, company)
  const attributesProducts = await models.Product.findAll(
    {
      where: whereAttributes,
      include:
      [{
        model: models.ProductVariation,
        as: 'productvariations',
        duplicating: false
      }]
    }
  );

  const attributes = {};
  let newMaxPrice = null;
  let newMinPrice = null;
  const newColors = new Set();
  const newSizes = new Set();
  const newMaterials = new Set();
  const newGenders = new Set();
  const companiesId = [];

  console.log('whereAttributes', whereAttributes);
  for (const product of attributesProducts) {
    companiesId.push(product.companyId);

    if (categoryIds.length > 0 && !categoryIds.includes(product.categoryId)) continue;
    if (companies && companies.length > 0 && !companies.includes(product.companyId)) continue;
    for (const variation of product.productvariations) {
      newMaxPrice = newMaxPrice
        ? Math.max(newMaxPrice, variation.currentPrice)
        : variation.currentPrice;
      newMinPrice = newMinPrice
        ? Math.min(newMinPrice, variation.currentPrice)
        : variation.currentPrice;
      if (variation.colorId !== null) {
        newColors.add(variation.colorId);
      }
      if (variation.sizeId !== null) {
        newSizes.add(variation.sizeId);
      }
      if (variation.materialId !== null) {
        newMaterials.add(variation.materialId);
      }
      if (variation.genderId !== null) {
        newGenders.add(variation.genderId);
      }
    }
  }

  attributes.colors = await models.Color.findAll({
    where: { id: { [Op.in]: Array.from(newColors) } }
  });
  attributes.sizes = await models.Size.findAll({
    where: { id: { [Op.in]: Array.from(newSizes) } }
  });
  attributes.materials = await models.Material.findAll({
    where: { id: { [Op.in]: Array.from(newMaterials) } }
  });
  attributes.genders = await models.Gender.findAll({
    where: { id: { [Op.in]: Array.from(newGenders) } }
  });
  attributes.maxPrice = newMaxPrice;
  attributes.minPrice = newMinPrice;
  attributes.companies = await models.Company.findAll({ where: { id: companiesId } });
  console.log('attributes', attributes);

  return {
    products: products,
    pages: pages,
    productsCount,
    attributes: attributes,
    pageSize: pageSize
  };
};

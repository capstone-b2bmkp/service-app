import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en attributesProduct controller');
  try {
    const attributes = {};

    attributes.colors = await models.Color.findAll();
    attributes.sizes = await models.Size.findAll();
    attributes.materials = await models.Material.findAll();
    attributes.genders = await models.Gender.findAll();
    attributes.maxPrice = await models.ProductVariation.max('currentPrice');
    attributes.minPrice = await models.ProductVariation.min('currentPrice');
    attributes.companies = await models.Company.findAll();

    return succesfullResponse({ attributes: attributes }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

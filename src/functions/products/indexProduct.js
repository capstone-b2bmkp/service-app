import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';
const { Op } = require('sequelize');

export const handler = async (req, res) => {
  console.log('estoy en indexProduct controller');
  try {
    const products = await models.Product.findAll();
    return succesfullResponse({ products: products }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

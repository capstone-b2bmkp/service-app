import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';
const { Op } = require('sequelize');

export const handler = async (req, res) => {
  console.log('estoy en searchBarProduct controller');
  console.log('name', req.pathParameters);
  const { name } = req.pathParameters;
  try {
    const products = await models.Product.findAll(
      { where: { name: { [Op.iLike]: `%${name}%` } } }
    );
    console.log(products);
    return succesfullResponse({ products: products }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

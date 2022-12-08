import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en indexProductVariation controller');
  try {
    const productvariations = await models.ProductVariation.findAll();
    return succesfullResponse({ productvariations: productvariations }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

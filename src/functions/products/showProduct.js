import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showProduct controller');
  const { id } = req.pathParameters;
  try {
    const product = await models.Product.findOne({ where: { id: id } });
    return succesfullResponse({ product: product }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

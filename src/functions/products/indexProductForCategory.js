import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';
export const handler = async (req, res) => {
  console.log('estoy en indexProductForCategory controller');
  const { categoryId } = req.pathParameters;

  try {
    // eslint-disable-next-line max-len
    const products = await models.Product.findAll({ where: { categoryId }, raw: true }, null, { limit: 30 });
    return succesfullResponse({ products: products }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

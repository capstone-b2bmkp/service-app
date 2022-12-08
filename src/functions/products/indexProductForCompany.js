import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en indexProduct controller');
  const { id } = req.pathParameters;
  try {
    const company = await models.Company.findOne({ where: { id: id } });
    const products = await models.Product.findAll({ where: { companyId: company.id } });
    return succesfullResponse({ products: products }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

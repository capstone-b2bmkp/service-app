import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en indexProduct controller for user');
  const { id } = req.pathParameters;
  try {
    const user = await models.User.findOne({ where: { id: id } });
    const company = await models.Company.findOne({ where: { id: user.companyId } });
    const products = await models.Product.findAll({ where: { companyId: company.id } });
    return succesfullResponse({ products: products, company: company }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

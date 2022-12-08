import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showCompaniesForCategories controller');
  const { id } = req.pathParameters;
  try {
    const companiesCategory = await models.Company.findAll({ where: { categoryId: id } });
    return succesfullResponse({ companies: companiesCategory }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

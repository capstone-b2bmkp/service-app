import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showCompany controller');
  const { id } = req.pathParameters;
  try {
    const company = await models.Company.findOne({ where: { id: id } });
    return succesfullResponse({ company: company }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

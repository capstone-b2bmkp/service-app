import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showDiscountrule controller');
  const { id } = req.pathParameters;
  try {
    const discountrule = await models.Discountrule.findOne({ where: { id: id } });
    return succesfullResponse({ discountrule: discountrule }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

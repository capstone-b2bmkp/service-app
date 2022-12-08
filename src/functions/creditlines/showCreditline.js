import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showCreditline controller');
  const { id } = req.pathParameters;
  try {
    const creditline = await models.Creditline.findOne({ where: { id } });
    return succesfullResponse({ creditline }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

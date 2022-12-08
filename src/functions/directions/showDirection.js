import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showDirection controller');
  const { id } = req.pathParameters;
  try {
    const direction = await models.Direction.findOne({ where: { userId: id } });
    return succesfullResponse({ direction: direction }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

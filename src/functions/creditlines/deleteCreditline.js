import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en deleteCreditline controller');
  try {
    const { id } = req.pathParameters;
    const creditline = await models.Creditline.findOne({ where: { id } });
    if (!creditline) {
      return errorResponse(`creditline with id ${id} not found`, 404);
    }
    await models.Creditline.destroy({ where: { id } });
    return succesfullResponse({ message: 'creditline deleted successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

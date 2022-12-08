import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en updateCreditline controller');
  try {
    const body = JSON.parse(req.body);
    const { id } = req.pathParameters;
    console.log(body);
    const { discount } = body.discount;
    const creditline = await models.Creditline.findOne({ where: { id } });
    if (!creditline) {
      return errorResponse(`creditline with id ${id} not found`, 404);
    }
    const updates = {};
    if (discount) {
      updates.discount = discount;
    }
    await models.Creditline.update(updates, { where: { id } });
    return succesfullResponse({ message: 'creditline updated successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

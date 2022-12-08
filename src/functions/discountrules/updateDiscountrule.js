import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en updateDiscountrule controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede crear el producto' }, 500);
    }

    const body = JSON.parse(req.body);
    const { id } = req.pathParameters;
    const { minimum, maximum, discount } = body.updatedDiscountrule;
    const discountrule = await models.Discountrule.findOne({ where: { id: id } });
    if (!discountrule) {
      return errorResponse(`Discountrule with id ${id} not found`, 404);
    }
    const updates = {};
    if (minimum) {
      updates.minimum = minimum;
    }
    if (maximum) {
      updates.maximum = maximum;
    }
    if (discount) {
      updates.discount = discount;
    }
    await models.Discountrule.update(updates, { where: { id: id } });
    return succesfullResponse({ message: 'Discountrule updated successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

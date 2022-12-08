import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en deleteDiscountrule controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede crear el descuento' }, 500);
    }
    const { id } = req.pathParameters;
    const discountrule = await models.Discountrule.findOne({ where: { id: id } });
    if (!discountrule) {
      return errorResponse(`Discountrule with id ${id} not found`, 404);
    }
    await models.Discountrule.destroy({ where: { id: id } });
    return succesfullResponse({ message: 'Discountrule deleted successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

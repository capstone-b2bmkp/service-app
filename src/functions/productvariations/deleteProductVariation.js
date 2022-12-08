import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en deleteProductVariation controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse(
        { error: 'Token invalido, no se puede eliminar la variacion de producto' },
        500
      );
    }
    const { id } = req.pathParameters;
    const productvariation = await models.ProductVariation.findOne({ where: { id: id } });
    if (!productvariation) {
      return errorResponse(`ProductVariation with id ${id} not found`, 404);
    }
    await models.ProductVariation.destroy({ where: { id: id } });
    return succesfullResponse({ message: 'ProductVariation deleted successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { checkAdmin } from '../../helpers/auth/checkAdmin';
import { checkSeller } from '../../helpers/auth/checkSeller';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en deleteProduct controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede crear el producto' }, 500);
    }
    // esto exige que el usuario sea vendedor o admin
    const checkAdminResult = checkAdmin(checkValidTokenResult);
    const checkSellerResult = checkSeller(checkValidTokenResult);
    if (checkSellerResult.statusCode !== 200 && checkAdminResult.statusCode !== 200) {
      return errorResponse({ error: 'No autorizado, no se puede crear el producto' }, 500);
    }
    const { id } = req.pathParameters;
    const product = await models.Product.findOne({ where: { id: id } });
    if (!product) {
      return errorResponse(`Product with id ${id} not found`, 404);
    }
    await models.Product.destroy({ where: { id: id } });
    return succesfullResponse({ message: 'Product deleted successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

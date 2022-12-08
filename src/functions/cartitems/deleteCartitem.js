import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en deleteCartitem controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede crear el producto' }, 500);
    }

    const { id } = req.pathParameters;
    const { userId } = req.pathParameters;

    const cart = await models.Cart.findOne({ where: { userId: userId } });
    const cartId = cart.id;
    await models.Cartitem.destroy({ where: { variationId: id, cartId: cartId } });
    return succesfullResponse({ message: 'Cartitem deleted successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

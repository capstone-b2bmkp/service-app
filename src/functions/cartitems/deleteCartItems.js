import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  console.log('estoy en deleteCartItems controller');
  try {
    const cart = await models.Cart.findOne({ where: { userId: event.pathParameters.userId } });
    if (!cart) {
      return errorResponse({ error: 'No hay carrito' }, 500);
    }

    const cartitems = await models.Cartitem.findAll({ where: { cartId: cart.id } });

    const promises = [];
    for (const cartitem of cartitems) {
      promises.push(models.Cartitem.destroy(
        { where: { variationId: cartitem.variationId, cartId: cart.id } }));
    }
    const variationsWithPromises = await Promise.all(promises);

    return succesfullResponse({ message: 'Cartitems deleted successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

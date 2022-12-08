import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req) => {
  console.log('estoy en createCartitem controller');
  try {
    const body = JSON.parse(req.body);
    const variation = body.variation;
    const userId = body.userId;
    const amount = body.amount;
    console.log('variation', variation);
    console.log('userId', userId);
    console.log('amount', amount);

    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede crear el item' }, 500);
    }

    const cart = await models.Cart.findOne({ where: { userId: userId } });
    if (!cart) {
      console.log('no hay carrito');
      const cart2 = await models.Cart.create({ userId: userId });
      const variationId = variation.id;
      console.log('variationId', variationId);
      const cartId = cart2.id;
      console.log('cartId', cartId);
      if (amount > 0) {
        await models.Cartitem.create({
          cartId,
          variationId,
          amount
        });
      }
    } else {
      console.log('si hay carrito');
      const variationId = variation.id;
      console.log('variationId', variationId);
      const cartId = cart.id;
      console.log('cartId', cartId);
      const cartitem = await models.Cartitem.findOne({
        where: {
          variationId: variationId,
          cartId: cartId
        }
      });
      if (!cartitem) {
        if (amount > 0) {
          await models.Cartitem.create({
            cartId,
            variationId,
            amount
          });
        }
      } else {
        const newAmount = amount;
        if (newAmount > 0) {
          await models.Cartitem.update(
            { amount: newAmount }, { where: { variationId: variationId, cartId: cartId } });
        }
      }
    }
    // await product.decrement('currentAvailable', { by: 1 });
    return succesfullResponse({ message: 'Cartitem created successfully' }, 201);
    // const product = await Product.findOne({ where: { id: productId } });
    // if (!product) {
    //   return res.status(404).json({
    //     message: `Product with id ${productId} not found`
    //   });
    // }
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

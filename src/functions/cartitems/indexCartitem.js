import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  console.log('estoy en indexCartitem controller');
  try {
    // const checkValidTokenResult = checkAuth(event);
    // if (checkValidTokenResult.statusCode !== 200) {
    //   return errorResponse({ error: 'Token invalido, no se puede crear el item' }, 500);
    // }
    const cart = await models.Cart.findOne({ where: { userId: event.pathParameters.userId } });
    if (!cart) {
      return errorResponse({ error: 'No hay carrito' }, 500);
    }
    const colors = await models.Color.findAll();
    const sizes = await models.Size.findAll();
    const genders = await models.Gender.findAll();
    const materials = await models.Material.findAll();

    const cartitems = await models.Cartitem.findAll({ where: { cartId: cart.id } });
    const variations = [];
    const promises = [];
    for (const cartitem of cartitems) {
      promises.push(models.ProductVariation.findOne({ where: { id: cartitem.variationId } }));
    }
    const variationsWithPromises = await Promise.all(promises);
    console.log(variationsWithPromises);
    const indexProduct = await models.Product.findAll();
    for (let i = 0; i < cartitems.length; i++) {
      const item = {};
      const varObject = {
        id: variationsWithPromises[i].id,
        productId: variationsWithPromises[i].productId,
        SKU: variationsWithPromises[i].SKU,
        SKUquoter: variationsWithPromises[i].SKUquoter,
        currentAvailable: variationsWithPromises[i].currentAvailable,
        currentPrice: variationsWithPromises[i].currentPrice,
        discountPercentage: variationsWithPromises[i].discountPercentage,
        offerPrice: variationsWithPromises[i].offerPrice,
        color: colors.find((color) => color.id === variationsWithPromises[i].colorId)?.name,
        size: sizes.find((size) => size.id === variationsWithPromises[i].sizeId)?.name,
        gender: genders.find((gender) => gender.id === variationsWithPromises[i].genderId)?.name,
        material: materials.find(
          (material) => material.id === variationsWithPromises[i].materialId)?.name
      };
      item.product = indexProduct.find(
        (element) => element.id === variationsWithPromises[i].productId);
      item.variation = varObject;
      item.amount = cartitems[i].amount;
      console.log('item', item);
      variations.push(item);
    }
    return succesfullResponse({ variations }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

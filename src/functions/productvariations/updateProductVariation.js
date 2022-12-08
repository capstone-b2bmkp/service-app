/* eslint-disable max-statements */
import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en updateProductVariation controller');
  const { id } = req.pathParameters;
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse(
        { error: 'Token invalido, no se puede actualizar la variacion de producto' },
        500);
    }

    const body = JSON.parse(req.body);
    const {
      productId,
      SKU,
      currentAvailable,
      currentPrice,
      discountPercentage,
      colorName,
      sizeName,
      materialName,
      genderName
    } = body.product;
    const product = await models.Product.findOne({ where: { id: productId } });
    if (!product) {
      return errorResponse(`Product con id ${productId} no encontrado`, 404);
    }
    const updates = {};
    if (SKU) updates.SKU = SKU;
    const color = await models.Color.findOne({ where: { name: colorName } });
    const size = await models.Size.findOne({ where: { name: sizeName } });
    const material = await models.Material.findOne({ where: { name: materialName } });
    const gender = await models.Gender.findOne({ where: { name: genderName } });
    if (color) {
      updates.colorId = color.id;
    }
    if (size) {
      updates.sizeId = size.id;
    }
    if (material) {
      updates.materialId = material.id;
    }
    if (gender) {
      updates.genderId = gender.id;
    };
    if (currentPrice && discountPercentage) {
      updates.discountPercentage = discountPercentage;
      updates.currentPrice = currentPrice;
      // eslint-disable-next-line max-len
      updates.offerPrice = Math.floor(currentPrice * (1 - (discountPercentage / 100)));
    }
    if (currentPrice && !discountPercentage) {
      updates.currentPrice = currentPrice;
      // eslint-disable-next-line max-len
      updates.offerPrice = Math.floor(currentPrice * (1 - (product.discountPercentage / 100)));
    }
    if (discountPercentage && !currentPrice) {
      updates.discountPercentage = discountPercentage;
      // eslint-disable-next-line max-len
      updates.offerPrice = Math.floor(product.currentPrice * (1 - (discountPercentage / 100)));
    }
    if (currentAvailable) {
      updates.currentAvailable = currentAvailable;
    }
    await models.ProductVariation.update(updates, { where: { id } });
    return succesfullResponse({ message: 'ProductVariation updated successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

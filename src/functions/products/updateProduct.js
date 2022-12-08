/* eslint-disable max-statements */
import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { checkAdmin } from '../../helpers/auth/checkAdmin';
import { checkSeller } from '../../helpers/auth/checkSeller';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en updateProduct controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede actualizar el producto' }, 500);
    }
    // esto exige que el usuario sea vendedor o admin
    const checkAdminResult = checkAdmin(checkValidTokenResult);
    const checkSellerResult = checkSeller(checkValidTokenResult);
    if (checkSellerResult.statusCode !== 200 && checkAdminResult.statusCode !== 200) {
      return errorResponse({ error: 'No autorizado, no se puede crear el producto' }, 500);
    }
    const body = JSON.parse(req.body);
    const { id } = req.pathParameters;
    const {
      categoryId,
      name,
      currentPrice,
      discountPercentage,
      currentAvailable,
      imageUrl,
      isActive
    } = body.product;
    const product = await models.Product.findOne({ where: { id: id } });
    if (!product) {
      return errorResponse(`Product with id ${id} not found`, 404);
    }
    const category = await models.Category.findOne({ where: { id: categoryId } });
    if (!category) {
      return errorResponse(`Category with id ${categoryId} not found`, 404);
    }

    const updates = {};
    if (categoryId) {
      updates.categoryId = categoryId;
    }
    if (name) {
      updates.name = name;
    }
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
    if (imageUrl) {
      updates.imageUrl = imageUrl;
    }
    if (isActive !== undefined) {
      updates.isActive = isActive;
    }
    await models.Product.update(updates, { where: { id: id } });
    return succesfullResponse({ message: 'Product updated successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

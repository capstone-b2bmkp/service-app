import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en indexProductVariationForProduct controller');
  const { productId } = req.pathParameters;
  try {
    const productvariations = await models.ProductVariation.findAll({
      where: {
        productId: productId
      }
    });
    const colors = await models.Color.findAll();
    const sizes = await models.Size.findAll();
    const genders = await models.Gender.findAll();
    const materials = await models.Material.findAll();

    const variations = [];
    for (const variation of productvariations) {
      const varObject = {
        id: variation.id,
        productId: variation.productId,
        SKU: variation.SKU,
        SKUquoter: variation.SKUquoter,
        currentAvailable: variation.currentAvailable,
        currentPrice: variation.currentPrice,
        discountPercentage: variation.discountPercentage,
        offerPrice: variation.offerPrice,
        color: colors.find((color) => color.id === variation.colorId)?.name,
        size: sizes.find((size) => size.id === variation.sizeId)?.name,
        gender: genders.find((gender) => gender.id === variation.genderId)?.name,
        material: materials.find((material) => material.id === variation.materialId)?.name
      };
      variations.push(varObject);
    }
    return succesfullResponse({ productvariations: variations }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

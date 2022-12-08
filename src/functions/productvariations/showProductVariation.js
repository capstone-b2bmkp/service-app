import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showProductVariation controller');
  const { id } = req.pathParameters;
  try {
    const productvariation = await models.ProductVariation.findOne({ where: { id: id } });

    const colors = await models.Color.findAll();
    const sizes = await models.Size.findAll();
    const genders = await models.Gender.findAll();
    const materials = await models.Material.findAll();

    const variation = {
      id: productvariation.id,
      productId: productvariation.productId,
      SKU: productvariation.SKU,
      SKUquoter: productvariation.SKUquoter,
      currentAvailable: productvariation.currentAvailable,
      currentPrice: productvariation.currentPrice,
      discountPercentage: productvariation.discountPercentage,
      offerPrice: productvariation.offerPrice,
      color: colors.find((color) => color.id === productvariation.colorId)?.name,
      size: sizes.find((size) => size.id === productvariation.sizeId)?.name,
      gender: genders.find((gender) => gender.id === productvariation.genderId)?.name,
      material: materials.find((material) => material.id === productvariation.materialId)?.name
    };

    return succesfullResponse({ variation: variation }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

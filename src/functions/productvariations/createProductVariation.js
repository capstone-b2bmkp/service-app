import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req) => {
  console.log('estoy en createProductVariation controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede crear la variacion de producto' }, 500);
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
      genderName,
      image
    } = body.product;

    const product = await models.Product.findOne({ where: { id: productId } });
    product.imageUrl = image;
    await product.save();
    if (!product) {
      return errorResponse(`Product con id ${productId} no encontrado`, 404);
    }
    const SKUquoter = 'TODO';

    const color = await models.Color.findOne({ where: { name: colorName } });
    const size = await models.Size.findOne({ where: { name: sizeName } });
    const material = await models.Material.findOne({ where: { name: materialName } });
    const gender = await models.Gender.findOne({ where: { name: genderName } });
    const offerPrice = Math.floor(currentPrice * (1 - (discountPercentage / 100)));

    const colorId = color ? color.id : null;
    const sizeId = size ? size.id : null;
    const materialId = material ? material.id : null;
    const genderId = gender ? gender.id : null;

    const productvariation = await models.ProductVariation.create({
      productId,
      SKU,
      SKUquoter,
      currentAvailable,
      currentPrice,
      discountPercentage,
      offerPrice,
      colorId,
      sizeId,
      materialId,
      genderId,
      colorName,
      sizeName,
      materialName,
      genderName
    });

    if (colorId) {
      const searchColorVariation = await models.Colorvariation.findOne(
        { where: { colorId, productId } });
      if (!searchColorVariation) {
        const colorvariation = await models.Colorvariation.create({
          productId,
          colorId,
          image: image
        });
      }
    }

    return succesfullResponse({ message: 'ProductVariation created successfully' }, 201);
  } catch (error) {
    console.log(error);
    return errorResponse(error.message, 500);
  };
};

/* eslint-disable max-statements */
import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { checkAdmin } from '../../helpers/auth/checkAdmin';
import { checkSeller } from '../../helpers/auth/checkSeller';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req) => {
  console.log('estoy en createProduct controller');
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
    const body = JSON.parse(req.body);
    const {
      name,
      categoryId,
      SKU,
      size,
      color,
      gender,
      material,
      currentPrice,
      discountPercentage,
      currentAvailable
    } = body.product;
    const userId = body.userId;
    const user = await models.User.findOne({ where: { id: userId } });
    if (!user) {
      return errorResponse(`User with id ${userId} not found`, 404);
    }
    const images = body.imagesLinks;
    const company = await models.Company.findOne({ where: { id: user.companyId } });
    if (!company) {
      return errorResponse('company not found', 404);
    }
    const companyId = company.id;
    const category = await models.Category.findOne({ where: { id: categoryId } });
    if (!category) {
      return errorResponse(`Category with id ${categoryId} not found`, 404);
    }
    const offerPrice = Math.floor(currentPrice * (1 - (discountPercentage / 100)));
    const product = await models.Product.create({
      companyId,
      categoryId,
      name,
      currentPrice,
      discountPercentage,
      offerPrice,
      currentAvailable,
      isActive: true,
      imageUrl: images[0]
    });

    const sizeObject = await models.Size.findOne({ where: { name: size } });
    let sizeId;
    if (sizeObject) {
      sizeId = sizeObject.id;
    }
    const colorObject = await models.Color.findOne({ where: { name: color } });
    let colorId;
    if (colorObject) {
      colorId = colorObject.id;
    }
    const genderObject = await models.Gender.findOne({ where: { name: gender } });
    let genderId;
    if (genderObject) {
      genderId = genderObject.id;
    }
    const materialObject = await models.Material.findOne({ where: { name: material } });
    let materialId;
    if (materialObject) {
      materialId = materialObject.id;
    }

    const variation = await models.ProductVariation.create({
      productId: product.id,
      SKU,
      sizeId,
      colorId,
      genderId,
      materialId,
      currentPrice,
      discountPercentage,
      offerPrice,
      currentAvailable
    });
    console.log('variation', variation);
    if (color) {
      const colorVariation = await models.Colorvariation.create({
        colorId,
        productId: product.id,
        image: images[0]
      });
      console.log('colorVariation', colorVariation);
    };

    const colorvariation = await models.Colorvariation.findOne({
      where: {
        productId: product.id,
        colorId: colorId
      }
    });

    const imagesPromises = [];
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const productPromise = models.Image.create({
        productId: product.id,
        colorvariationId: colorvariation.id,
        url: image
      });
      imagesPromises.push(productPromise);
    }
    const imagesCreation = await Promise.all(imagesPromises);

    return succesfullResponse({ message: 'Product created successfully' }, 201);
  } catch (error) {
    console.log(error);
    return errorResponse(error.message, 500);
  };
};

/* eslint-disable max-statements */
import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { checkAdmin } from '../../helpers/auth/checkAdmin';
import { checkSeller } from '../../helpers/auth/checkSeller';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req) => {
  console.log('estoy en createColorvariation controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede crear la variacion por color' }, 500);
    }
    // esto exige que el usuario sea vendedor o admin
    const checkAdminResult = checkAdmin(checkValidTokenResult);
    const checkSellerResult = checkSeller(checkValidTokenResult);
    if (checkSellerResult.statusCode !== 200 && checkAdminResult.statusCode !== 200) {
      return errorResponse({ error: 'No autorizado, no se puede crear la variacion por color' }, 500);
    }
    const body = JSON.parse(req.body);
    const {
      productId,
      colorId
    } = body.colorvariation;
    const images = body.imagesLinks;
    const product = await models.Product.findOne({ where: { id: productId } });
    if (!product) {
      return errorResponse(`Product with id ${productId} not found`, 500);
    }
    const color = await models.Color.findOne({ where: { id: colorId } });
    if (!color) {
      return errorResponse(`Color with id ${colorId} not found`, 500);
    }
    const colorvariation = await models.Colorvariation.create({
      productId,
      colorId,
      image: images[0]
    });

    const imagesPromises = [];
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      const productPromise = models.Image.create({
        productId,
        colorvariationId: colorvariation.id,
        url: image
      });
      imagesPromises.push(productPromise);
    }
    const imagesCreation = await Promise.all(imagesPromises);

    return succesfullResponse({ message: 'Colorvariation created successfully' }, 201);
  } catch (error) {
    console.log(error);
    return errorResponse(error.message, 500);
  };
};

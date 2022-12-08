/* eslint-disable max-statements */
import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { checkAdmin } from '../../helpers/auth/checkAdmin';
import { checkSeller } from '../../helpers/auth/checkSeller';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en Colorvariation controller');
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
      image
    } = body.colorvariation;
    const colorvariation = await models.Colorvariation.findOne({ where: { id: id } });
    if (!colorvariation) {
      return errorResponse(`Colorvariation with id ${id} not found`, 500);
    }
    const updates = {};
    if (image) {
      updates.image = image;
    }
    await models.Colorvariation.update(updates, { where: { id: id } });
    return succesfullResponse({ message: 'Colorvariation updated successfully' }, 201);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

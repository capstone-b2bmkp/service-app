import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en updateProduct controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede crear el producto' }, 500);
    }

    const body = JSON.parse(req.body);
    const { id } = req.pathParameters;
    const isActive = body.isActive;
    const product = await models.Product.findOne({ where: { id: id } });
    if (!product) {
      return errorResponse(`Product with id ${id} not found`, 404);
    }
    const updates = {};
    if (isActive !== undefined) {
      updates.isActive = isActive;
    }
    await models.Product.update(updates, { where: { id: id } });
    return succesfullResponse({ message: 'Product updated successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

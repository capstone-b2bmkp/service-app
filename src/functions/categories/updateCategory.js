import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { checkAdmin } from '../../helpers/auth/checkAdmin';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  console.log('estoy en updateCategory controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(event);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede crear la categoria' }, 500);
    }

    // esto revisa que el token enviado corresponda a un usuario admin
    const checkAdminResult = checkAdmin(checkValidTokenResult);
    if (checkAdminResult.statusCode !== 200) {
      return errorResponse({ error: 'No autorizado' }, 401);
    }

    const body = JSON.parse(event.body);
    const { id } = event.pathParameters;
    const { name } = body;
    const category = await models.Category.findOne({ where: { id: id } });
    if (!category) {
      return errorResponse({ error: `Category with id ${id} not found` }, 404);
    }
    const updates = {};
    if (name) {
      updates.name = name;
    }
    await models.Category.update(updates, { where: { id: id } });
    return succesfullResponse({ message: 'Category updated successfully' }, 201);
  } catch (error) {
    return errorResponse({ error: 'No se pudo actualizar la categoria' }, 500);
  }
};

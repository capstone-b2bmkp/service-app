import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { checkAdmin } from '../../helpers/auth/checkAdmin';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  console.log('estoy en createCategory handler');
  try {
    // esto exige que el usuario este logueado
    // sacar en caso de que no se quiera que este logueado
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
    console.log(body);
    const { name, parentId } = body.category;
    const existingCategory = await models.Category.findOne({ where: { name } });
    if (existingCategory) {
      return errorResponse({ error: 'Category already exists' }, 400);
    }
    await models.Category.create({
      name,
      parentId
    });
    return succesfullResponse({ message: 'Categoria creada correctamente' }, 201);
  } catch (error) {
    return errorResponse({ error: 'No se pudo crear la categoria' }, 500);
  }
};

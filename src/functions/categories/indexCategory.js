import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';
import { getSubCategoriesRecursive } from '../../helpers/categories/getSubCategoriesRecursive';

export const handler = async (event) => {
  console.log('estoy en indexCategory handler');
  try {
    const category = await models.Category.findOne({ where: { name: 'Root category' }, raw: true });
    await getSubCategoriesRecursive(category);
    return succesfullResponse({ category }, 200);
  } catch (error) {
    return errorResponse({ error: 'No se pudo obtener las categorias' }, 500);
  }
};

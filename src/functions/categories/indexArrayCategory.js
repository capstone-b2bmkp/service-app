import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';
const { Op } = require('sequelize');

export const handler = async (event) => {
  console.log('estoy en indexArrayCategory handler');
  try {
    const categories = await models.Category.findAll(
      { where: { name: { [Op.ne]: 'Root category' } } }
    );
    return succesfullResponse({ categories: categories }, 200);
  } catch (error) {
    return errorResponse({ error: 'No se pudo obtener las categorias' }, 500);
  }
};

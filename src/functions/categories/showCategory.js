import models from '../../models';
import { getSubCategoriesRecursive } from '../../helpers/categories/getSubCategoriesRecursive';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showCategory handler');
  const { id } = req.pathParameters;
  try {
    const category = await models.Category.findOne({ where: { id: id }, raw: true });
    await getSubCategoriesRecursive(category);
    return succesfullResponse({ category }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

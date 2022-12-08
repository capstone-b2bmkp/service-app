import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  try {
    const { id } = event.pathParameters;
    const company = await models.Company.findOne({ where: { id: id } });
    if (!company) {
      return errorResponse(`Company with id ${id} not found`, 404);
    }
    await models.Company.destroy({
      where: { id: id }
    });
    return succesfullResponse({ message: 'Company deleted successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  };
};

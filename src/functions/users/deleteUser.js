import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  try {
    const { id } = event.pathParameters;
    const user = await models.User.findOne({ where: { id: id } });
    if (!user) {
      return errorResponse(`User with id ${id} not found`, 404);
    }
    await models.User.destroy({
      where: { id: id }
    });
    return succesfullResponse({ message: 'User deleted successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  };
};

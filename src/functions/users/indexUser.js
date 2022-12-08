import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  console.log('estoy en indexUser controller');
  try {
    const users = await models.User.findAll();
    console.log(users);
    return succesfullResponse({ data: users });
  } catch (error) {
    return errorResponse(error.message);
  }
};

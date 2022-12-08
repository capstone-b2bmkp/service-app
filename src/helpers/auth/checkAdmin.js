import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const checkAdmin = (checkValidTokenResult) => {
  try {
    const { dataToken } = JSON.parse(checkValidTokenResult.body);
    if (dataToken.isAdmin) {
      return succesfullResponse({ message: 'succesfull admin check!!' }, 200);
    }
    return errorResponse({ error: 'No autorizado' }, 401);
  } catch (error) {
    return errorResponse({ error: 'No autorizado' }, 401);
  }
};

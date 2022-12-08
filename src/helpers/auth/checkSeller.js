import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const checkSeller = (checkValidTokenResult) => {
  try {
    const { isSeller } = JSON.parse(checkValidTokenResult.body);
    if (isSeller) {
      return succesfullResponse({ message: 'succesfull seller check!!' }, 200);
    }
    return errorResponse({ error: 'No autorizado' }, 401);
  } catch (error) {
    return errorResponse({ error: 'No autorizado' }, 401);
  }
};

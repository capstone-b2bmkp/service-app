import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const checkBuyer = (checkValidTokenResult) => {
  try {
    const { isBuyer } = JSON.parse(checkValidTokenResult.body);
    if (isBuyer) {
      return succesfullResponse({ message: 'succesfull buyer check!!' }, 200);
    }
    return errorResponse({ error: 'No autorizado' }, 401);
  } catch (error) {
    return errorResponse({ error: 'No autorizado' }, 401);
  }
};

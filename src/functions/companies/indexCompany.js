import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  console.log('estoy en indexCompany controller');
  try {
    const companies = await models.Company.findAll();
    return succesfullResponse({ data: companies }, 200);
  } catch (error) {
    return errorResponse(error.message);
  }
};

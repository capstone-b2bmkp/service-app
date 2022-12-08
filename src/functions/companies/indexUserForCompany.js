import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en indexUserForCompany controller');
  const { id } = req.pathParameters;
  try {
    console.log(id);
    const users = await models.User.findAll({ where: { companyId: id } });
    return succesfullResponse({ users: users }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

// https://medium.com/@chrisjr06/why-and-how-to-avoid-await-in-a-for-loop-32b86722171

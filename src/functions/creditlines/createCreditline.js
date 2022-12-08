import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req) => {
  console.log('estoy en createCreditline controller');
  try {
    const body = JSON.parse(req.body);
    const { buyerId, sellerId, discount } = body.creditline;
    await models.Creditline.create({
      buyerId,
      sellerId,
      discount
    });
    return succesfullResponse({ message: 'Creditline created successfully' }, 201);
  } catch (error) {
    return errorResponse(error.message, 500);
  };
};

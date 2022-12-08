import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showPurchase controller');
  const { id } = req.pathParameters;
  try {
    const purchases = await models.Purchase.findAll({ where: { buyerId: id } });
    const promisesSellers = [];
    for (const purchase of purchases) {
      promisesSellers.push(models.Company.findOne({ where: { id: purchase.sellerId } }));
    }
    const sellers = await Promise.all(promisesSellers);
    return succesfullResponse({ purchase: purchases, seller: sellers }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

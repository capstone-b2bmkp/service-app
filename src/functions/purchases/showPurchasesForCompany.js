import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showPurchaseForCompany controller');
  const { companyId } = req.pathParameters;
  try {
    const buyers = await models.User.findAll({ where: { companyId: companyId } });
    const promisesPurchases = [];
    for (const buyer of buyers) {
      promisesPurchases.push(models.Purchase.findAll({ where: { buyerId: buyer.id } }));
    }
    const purchases = await Promise.all(promisesPurchases);
    let promisesSellers = [];
    const AllSellers = [];
    for (let i = 0; i < purchases.length; i++) {
      promisesSellers.push(models.Company.findOne({ where: { id: purchases[i].sellerId } }));
    }
    const sellers = await Promise.all(promisesSellers);
    AllSellers.push(sellers);
    promisesSellers = [];
    return succesfullResponse({ purchase: purchases, seller: AllSellers }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showPurchasesForSeller controller');
  const { id } = req.pathParameters;
  try {
    const purchases = await models.Purchase.findAll({ where: { sellerId: id } });
    const promisesBuyers = [];
    for (const purchase of purchases) {
      promisesBuyers.push(models.User.findOne({ where: { id: purchase.buyerId } }));
    }
    const buyers = await Promise.all(promisesBuyers);
    const promisesBuyersCompanies = [];
    for (const buyer of buyers) {
      promisesBuyersCompanies.push(models.Company.findOne({ where: { id: buyer.companyId } }));
    }
    const buyersCompanies = await Promise.all(promisesBuyersCompanies);
    const company = await models.Company.findOne({ where: { id } });
    return succesfullResponse({ sales: purchases, seller: company, buyers, buyersCompanies }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

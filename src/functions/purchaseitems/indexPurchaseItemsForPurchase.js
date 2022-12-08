import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';
import { checkAuth } from '../../helpers/auth/checkAuth';

export const handler = async (req, res) => {
  console.log('estoy en indexPurchaseItemsForPurchase controller');
  const { purchaseId } = req.pathParameters;
  try {
    const purchase = await models.Purchase.findOne({ where: { id: purchaseId } });
    const seller = await models.Company.findOne({ where: { id: purchase.sellerId } });
    const buyer = await models.User.findOne({ where: { id: purchase.buyerId } });
    const buyerCompany = await models.Company.findOne({ where: { id: buyer.companyId } });
    const purchaseItems = await models.Purchaseitem.findAll({ where: { purchaseId } });
    return succesfullResponse({ purchase, purchaseItems, buyer, buyerCompany, seller }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showQuoterpurchaseForPurchase controller');
  const { purchaseId } = req.pathParameters;
  try {
    const purchase = await models.Purchase.findOne({ where: { id: purchaseId } });
    // eslint-disable-next-line max-len
    const quoterPurchase = await models.Quoterpurchase.findOne({ where: { id: purchase.quoterPurchaseId } });
    return succesfullResponse({ quoterPurchase: quoterPurchase }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

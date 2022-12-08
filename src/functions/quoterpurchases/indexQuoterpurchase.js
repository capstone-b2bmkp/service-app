import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showQuoterpurchaseForPurchase controller');
  try {
    const quoterPurchases = await models.Quoterpurchase.findAll();
    return succesfullResponse({ quoterPurchases: quoterPurchases }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

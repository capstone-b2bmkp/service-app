import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showInvoiceForPurchase controller');
  const { purchaseId } = req.pathParameters;
  try {
    const purchase = await models.Purchase.findOne({ where: { id: purchaseId } });
    // eslint-disable-next-line max-len
    const invoiceData = await models.Invoice.findOne({ where: { purchaseId: purchase.id } });
    return succesfullResponse({ invoice: invoiceData }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

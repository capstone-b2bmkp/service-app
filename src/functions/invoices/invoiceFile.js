import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';
const { Op } = require('sequelize');

export const handler = async (event) => {
  console.log('estoy en fileInvoice handler');
  const body = JSON.parse(event.body);
  try {
    console.log('BODU', body);
    const invoice = await models.Invoice.findOne({
      where: { purchaseId: body.purchaseId }
    });
    if (!invoice) {
      return errorResponse(`Invoice with purchaseId ${body.purchaseId} not found`, 404);
    }
    invoice.file = body.file;
    await invoice.save();
    // const invoice = await models.Invoice.findOne({
    //   where: { purchaseId: body.purchaseId }
    // });
    console.log('INVOICE', invoice);
    return succesfullResponse(200);
  } catch (error) {
    return errorResponse({ error: error }, 500);
  }
};

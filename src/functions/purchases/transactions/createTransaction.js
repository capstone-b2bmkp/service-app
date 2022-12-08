import models from '../../../models';
import { succesfullResponse, errorResponse } from '../../../utils/response_util';
import { WebpayPlus } from 'transbank-sdk';
import Quoterpurchase from '../../../models/quoterpurchase';

export const handler = async (event) => {
  console.log('estoy en createTransaction controller');
  const { id } = event.pathParameters;
  const body = JSON.parse(event.body);
  try {
    console.log('BODY AQUI', body);
    const buyOrder = `O-${generateCode()}`;
    const sessionId = `S-${generateCode()}`;
    const amount = body.amount;
    const returnUrl = `https://quoter.cl/purchases/${id}/checkout/`;
    const transaction = await (new WebpayPlus.Transaction()).create(
      buyOrder,
      sessionId,
      amount,
      returnUrl
    );

    // update generalPurchase:
    const generalPurchase = await Quoterpurchase.findOne({ where: { id } });
    const updates = {};
    if (buyOrder) {
      updates.orderId = buyOrder;
    }
    if (sessionId) {
      updates.sessionId = sessionId;
    }
    if (transaction.token) {
      updates.transbankToken = transaction.token;
    }
    if (transaction.url) {
      updates.transbankUrl = transaction.url;
    }
    await Quoterpurchase.update(updates, { where: { id } });
    console.log(transaction);
    return succesfullResponse({ transaction }, 201);
  } catch (error) {
    return errorResponse(error.message, 500);
  };
};

function generateCode () {
  const digits = '0123456789';
  let code = '';
  for (let i = 0; i < 5; i++) {
    code += digits[Math.floor(Math.random() * 10)];
  }
  return code;
}

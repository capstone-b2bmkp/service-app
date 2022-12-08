import models from '../../../models';
import { succesfullResponse, errorResponse } from '../../../utils/response_util';
import { WebpayPlus } from 'transbank-sdk';

export const handler = async (req, res) => {
  console.log('estoy en commitTransaction controller');
  const { id } = req.pathParameters;
  try {
    const body = JSON.parse(req.body);
    const token = body.token_ws;
    const cart = body.cart;
    const commitResponse = await (new WebpayPlus.Transaction()).commit(token);
    const generalPurchase = await models.Quoterpurchase.findOne({ where: { id } });
    const updates = {};
    if (commitResponse.response_code === 0) {
      updates.paymentStatus = 1;
    } else {
      updates.paymentStatus = 0;
    }
    updates.transbankAuthorizationCode = commitResponse.authorization_code;
    updates.transbankTransactionDate = commitResponse.transaction_date;
    updates.transbankTypePayment = commitResponse.payment_type_code;
    updates.transbankInstallmentsNumber = commitResponse.installments_number;
    updates.transbankCardNumber = commitResponse.card_detail.card_number;
    await generalPurchase.update(updates);
    const delivery = await models.Delivery.findOne({ where: { id: generalPurchase.deliveryId } });
    if (commitResponse.response_code === 0) {
      const variations = await models.ProductVariation.findAll();
      const promisesUpdVariations = [];
      for (const item of cart) {
        const pUpdate = {};
        pUpdate.currentAvailable = variations.find(
          (element) => element.id === item.variationId).currentAvailable - item.quantity;
        promisesUpdVariations.push(models.ProductVariation.update(
          pUpdate, { where: { id: item.variationId } }));
      }
      await Promise.all(promisesUpdVariations);
    }

    return succesfullResponse({ purchase: generalPurchase, delivery }, 201);
  } catch (error) {
    return errorResponse(error.message, 500);
  };
};

import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showPurchasesForSeller controller');
  const { id } = req.pathParameters;
  try {
    const sellerUser = await models.User.findOne({ where: { id: id } });
    const purchases = await models.Purchase.findAll({ where: { sellerId: sellerUser.companyId } });
    const promisesBuyers = [];
    const promisesInvoices = [];
    for (const purchase of purchases) {
      promisesBuyers.push(models.User.findOne({ where: { id: purchase.buyerId } }));
      promisesInvoices.push(models.Invoice.findOne({ where: { purchaseId: purchase.id } }));
    }
    const buyers = await Promise.all(promisesBuyers);
    const invoices = await Promise.all(promisesInvoices);
    const promisesBuyersCompanies = [];
    for (const buyer of buyers) {
      promisesBuyersCompanies.push(models.Company.findOne({ where: { id: buyer.companyId } }));
    }
    const buyersCompanies = await Promise.all(promisesBuyersCompanies);
    return succesfullResponse({ sales: purchases, buyers, buyersCompanies, invoices }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

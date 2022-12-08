import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

// eslint-disable-next-line max-statements
export const handler = async (event) => {
  console.log('estoy en createPurchase controller');
  console.log('RECIBIENDOO', JSON.parse(event.body));
  const body = JSON.parse(event.body);
  const { buyerId, cart, sellersCost, deliveryInfo, invoiceInfo, amount, creditlines } = body;
  try {
    const buyerUser = await models.User.findOne({ where: { id: buyerId } });

    // search for all discount quoter intervals

    const discountrules = await models.Discountrule.findAll();

    let discount = 0;
    for (const rule of discountrules) {
      // if the amount of the purchase is in the interval
      if (amount >= rule.minimum && amount <= rule.maximum) {
        // apply the discount
        discount = rule.discount;
      }
    }

    // create the delivery instance for the quoter purchase:
    const delivery = await models.Delivery.create(deliveryInfo);

    // Quoterpurchase has many Purchases, each associated to a company
    const generalPurchase = await models.Quoterpurchase.create({
      deliveryId: delivery.id, cost: 0, paymentStatus: 0
    });

    // this array will store all the purchases, each purchase starts with a cost = 0
    const promises = [];
    for (let i = 0; i < sellersCost.length; i++) {
      promises.push(models.Purchase.create({
        buyerId,
        sellerId: sellersCost[i].sellerId,
        paymentStatus: 'pendingInvoice',
        deliveryStatus: 'pendingDelivery',
        cost: 0,
        quoterPurchaseId: generalPurchase.id
      }));
    }
    const purchasesCreated = await Promise.all(promises);

    // create for each purchase a invoice:
    const promisesInvoice = [];
    const {
      holdingName, rutF, mailF, address, region, commune, topic
    } = invoiceInfo;
    for (let i = 0; i < purchasesCreated.length; i++) {
      promisesInvoice.push(models.Invoice.create({
        purchaseId: purchasesCreated[i].id,
        holding: holdingName,
        rut: rutF,
        mail: mailF,
        direction: address,
        topic,
        region,
        district: commune
      }));
    }
    const invoicesCreated = await Promise.all(promisesInvoice);

    // we look for every product and variation in the cart and we store its information
    const variationPromises = [];
    const productPromises = [];
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      const variationPromise = models.ProductVariation.findOne({ where: { id: item.variationId } });
      variationPromises.push(variationPromise);
      const productPromise = models.Product.findOne({ where: { id: item.productId } });
      productPromises.push(productPromise);
    }
    const variations = await Promise.all(variationPromises);
    const products = await Promise.all(productPromises);

    // we find a purchase for every product in the cart
    const purchasePromises = [];
    for (let i = 0; i < cart.length; i++) {
      const product = products[i];
      const purchasePromise = models.Purchase.findOne({ where: { sellerId: product.companyId, buyerId }, order: [['createdAt', 'DESC']] });
      purchasePromises.push(purchasePromise);
    }
    const purchasesFound = await Promise.all(purchasePromises);
    const purchaseitemPromises = [];
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      console.log('price', variations[i].offerPrice);
      console.log('amount', item.quantity);
      console.log('variationId', item.variationId);
      console.log('purchaseId', purchasesFound[i].id);
      const cartPurchaseItem = models.Purchaseitem.create({
        name: products[i].name,
        price: variations[i].offerPrice,
        amount: item.quantity,
        variationId: item.variationId,
        categoryId: products[i].categoryId,
        purchaseId: purchasesFound[i].id
      });
      purchaseitemPromises.push(cartPurchaseItem);
    }
    const purchaseItems = await Promise.all(purchaseitemPromises);

    console.log('1');
    // we calculate the cost for every purchase
    const amountPromises = [];
    let totalAmount = 0;
    const newPurchasesFound = [];
    const idFound = [];
    for (let i = 0; i < purchasesFound.length; i++) {
      const purchase = purchasesFound[i];
      if (!idFound.includes(purchase.id)) {
        newPurchasesFound.push(purchase);
        idFound.push(purchase.id);
      }
    }
    console.log('2');
    // we get all the creditlines:
    const indexCreditLines = await models.Creditline.findAll();
    for (let i = 0; i < newPurchasesFound.length; i++) {
      let amount = 0;
      const purchase = newPurchasesFound[i];
      console.log('sellerId:', purchase.sellerId);
      for (let j = 0; j < purchaseItems.length; j++) {
        const item = cart[j];
        const purchaseItem = purchaseItems[j];
        if (purchaseItem.purchaseId === purchase.id) {
          if (creditlines.find((element) => element.sellerId === products[j].companyId)) {
            console.log(`encontre un creditline de ${products[j].companyId}`);
            // eslint-disable-next-line max-len
            const creditLine = indexCreditLines.find((element) => (element.sellerId === products[j].companyId) && (element.buyerId === buyerUser.companyId));
            // eslint-disable-next-line max-len
            amount += (variations[j].offerPrice * item.quantity) * (1 - ((creditLine.discount) / 100));
          } else {
            amount += (variations[j].offerPrice * item.quantity);
          }
        }
      }
      console.log('3');
      console.log('cost', amount);
      const amountPromise = purchase.update({ cost: Math.floor(amount) });
      amountPromises.push(amountPromise);
      totalAmount += amount;
    }
    await Promise.all(amountPromises);
    console.log('4');
    const updates = {};
    updates.cost = Math.floor(totalAmount * (1 - (discount / 100)));
    await generalPurchase.update(updates);

    return succesfullResponse({ message: 'Purchase created successfully!', purchase: generalPurchase }, 201);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

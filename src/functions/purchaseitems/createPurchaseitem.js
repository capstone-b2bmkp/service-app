import { Purchaseitem, Purchase, Product } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en createPurchaseitem controller');
  const { purchaseId, productId, categoryId, name, price, imageUrl, amount } = req.body;
  try {
    const purchase = await Purchase.findOne({ where: { id: purchaseId } });
    if (!purchase) {
      return res.status(404).json({
        message: `Purchase with id ${purchaseId} not found`
      });
    }
    const product = await Product.findOne({ where: { id: productId } });
    if (!product) {
      return res.status(404).json({
        message: `Product with id ${productId} not found`
      });
    }
    await Purchaseitem.create({
      purchaseId,
      productId,
      categoryId,
      name,
      price,
      imageUrl,
      amount
    });
    res.status(201).json({
      message: 'Item de compra creado correctamente'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

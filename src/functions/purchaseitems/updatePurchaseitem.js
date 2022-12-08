import { Purchaseitem } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en updatePurchaseitem controller');
  try {
    const { id, purchaseId, productId, categoryId, name, price, imageUrl, amount } = req.body;
    const purchaseitem = await Purchaseitem.findOne({ where: { id: id } });
    if (!purchaseitem) {
      return res.status(404).json({
        message: `Purchaseitem with id ${id} not found`
      });
    }
    const updates = {};
    if (purchaseId) {
      updates.purchaseId = purchaseId;
    }
    if (productId) {
      updates.productId = productId;
    }
    if (categoryId) {
      updates.categoryId = categoryId;
    }
    if (name) {
      updates.name = name;
    }
    if (price) {
      updates.price = price;
    }
    if (imageUrl) {
      updates.imageUrl = imageUrl;
    }
    if (amount) {
      updates.amount = amount;
    }
    await Purchaseitem.update(updates, { where: { id: id } });
    res.status(201).json({
      message: 'Item de compra actualizado correctamente'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

import { Purchase } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en updatePurchase controller');
  try {
    const { id, buyerId, sellerId, cost, status } = req.body;
    const purchase = await Purchase.findOne({ where: { id: id } });
    if (!purchase) {
      return res.status(404).json({
        message: `Purchase with id ${id} not found`
      });
    }
    const updates = {};
    if (buyerId) {
      updates.buyerId = buyerId;
    }
    if (sellerId) {
      updates.sellerId = sellerId;
    }
    if (cost) {
      updates.cost = cost;
    }
    if (status) {
      updates.status = status;
    }
    await Purchase.update(updates, { where: { id: id } });
    res.status(201).json({
      message: 'Compra actualizada correctamente'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

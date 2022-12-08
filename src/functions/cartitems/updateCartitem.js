import { Cartitem } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en updateCartitem controller');
  try {
    const { id, cartId, variationId, amount } = req.body;
    const cartitem = await Cartitem.findOne({ where: { id: id } });
    if (!cartitem) {
      return res.status(404).json({
        message: `Cartitem with id ${id} not found`
      });
    }
    const updates = {};
    if (cartId) {
      updates.cartId = cartId;
    }
    if (variationId) {
      updates.variationId = variationId;
    }
    if (amount) {
      updates.amount = amount;
    }
    await Cartitem.update(updates, { where: { id: id } });
    res.status(201).json({
      message: 'Cartitem updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

import { Cart } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en updateCart controller');
  try {
    const { id, userId } = req.body;
    const cart = await Cart.findOne({ where: { id: id } });
    if (!cart) {
      return res.status(404).json({
        message: `Cart with id ${id} not found`
      });
    }
    const updates = {};
    if (userId) {
      updates.userId = userId;
    }
    await Cart.update(updates, { where: { id: id } });
    res.status(201).json({
      message: 'Cart updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

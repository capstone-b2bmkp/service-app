import { Cart } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en deleteCart controller');
  try {
    const { id } = req.body;
    const cart = await Cart.findOne({ where: { id: id } });
    if (!cart) {
      return res.status(404).json({
        message: `Cart with id ${id} not found`
      });
    }
    await Cart.destroy({ where: { id: id } });
    res.status(201).json({
      message: 'Cart deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

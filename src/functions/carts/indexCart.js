import { Cart } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en indexCart controller');
  try {
    const carts = await Cart.findAll();
    res.status(200).json({ data: carts });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

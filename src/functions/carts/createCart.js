import { Cart, User } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en createCart controller');
  const { userId } = req.body;
  try {
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({
        message: `User with id ${userId} not found`
      });
    }
    await Cart.create({
      userId
    });
    res.status(201).json({
      message: 'Cart created successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

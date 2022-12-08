import { Purchase } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en indexPurchase controller');
  try {
    const purchases = await Purchase.findAll();
    res.status(200).json({ data: purchases });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

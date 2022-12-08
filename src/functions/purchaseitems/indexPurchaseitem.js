import { Purchaseitem } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en indexPurchaseitem controller');
  try {
    const purchaseitems = await Purchaseitem.findAll();
    res.status(200).json({ data: purchaseitems });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

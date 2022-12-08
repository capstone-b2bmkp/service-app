import { Purchase } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en deletePurchase controller');
  try {
    const { id } = req.body;
    const purchase = await Purchase.findOne({ where: { id: id } });
    if (!purchase) {
      return res.status(404).json({
        message: `Purchase with id ${id} not found`
      });
    }
    await Purchase.destroy({ where: { id: id } });
    res.status(201).json({
      message: 'Compra eliminada correctamente'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

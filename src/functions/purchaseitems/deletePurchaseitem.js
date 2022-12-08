import { Purchaseitem } from '../../models';

export const handler = async (req, res) => {
  console.log('estoy en deletePurchaseitem controller');
  try {
    const { id } = req.body;
    const purchaseitem = await Purchaseitem.findOne({ where: { id: id } });
    if (!purchaseitem) {
      return res.status(404).json({
        message: `Purchaseitem with id ${id} not found`
      });
    }
    await Purchaseitem.destroy({ where: { id: id } });
    res.status(201).json({
      message: 'Item de compra eliminado correctamente'
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

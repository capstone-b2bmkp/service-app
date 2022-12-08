import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showProductsForCompany controller');
  const { id } = req.pathParameters;
  console.log(id, 'ID DE LA EMPRESA');
  try {
    const products = await models.Product.findAll({ where: { companyId: id } });
    // esto agrega el atributo precio de oferta en la product response
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      // agregar a producto un precio final
      product.setDataValue('offerPrice', await product.currentPrice * (1 - (product.discountPercentage / 100)));
    }
    return succesfullResponse({ data: products }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

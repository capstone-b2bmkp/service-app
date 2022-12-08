import { succesfullResponse, errorResponse } from '../../utils/response_util';
import { filter } from '../../helpers/products/filter';

export const handler = async (req, res) => {
  console.log('estoy en filterProductForCategory controller');

  try {
    const body = JSON.parse(req.body);
    const { products, pages, productsCount, pageSize, attributes } = await filter(body.filters, 'category');
    return succesfullResponse({
      products: products,
      pages: pages,
      productsCount: productsCount,
      pageSize: pageSize,
      attributes: attributes
    }, 200);
  } catch (error) {
    console.log(error);
    return errorResponse(error.message, 500);
  }
};

import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  console.log('estoy en showCompaniesWithProducts controller');
  // Obtiene todas las companies que tengan al menos un producto
  try {
    const products = await models.Product.findAll();

    if (!products) {
      return errorResponse('Products not found', 404);
    }
    const indexCompanies = [];
    for (let i = 0; i < products.length; i++) {
      indexCompanies.push(products[i].companyId);
    }

    const companies = await models.Company.findAll();
    return succesfullResponse({ data: companies }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

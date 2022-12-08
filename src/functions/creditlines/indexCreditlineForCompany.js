import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en indexCreditlineForCompany controller');
  const { id } = req.pathParameters;
  try {
    const creditlines = await models.Creditline.findAll({ where: { sellerId: id } });
    console.log(creditlines);
    return succesfullResponse({ creditlines }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

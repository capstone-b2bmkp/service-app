import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en indexValidatedcompanies controller');
  try {
    const relations = await models.Validatedcompany.findAll();
    const validatedcompanies = [];
    const promises = [];
    for (let i = 0; i < relations.length; i++) {
      promises.push(models.Company.findOne({ where: { id: relations[i].companyId } }));
    }
    const companies = await Promise.all(promises);
    for (let i = 0; i < relations.length; i++) {
      validatedcompanies.push([companies[i], relations[i].isValidated]);
    }
    return succesfullResponse({ validatedcompanies: validatedcompanies }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  };
};

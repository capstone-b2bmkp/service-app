import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  console.log('estoy en updateValidatedcompanies controller');
  try {
    const body = JSON.parse(event.body);
    const { companyId } = event.pathParameters;
    const validatedCompany = await models.Validatedcompany.findOne({
      where: { companyId: companyId }
    });
    if (!validatedCompany) {
      return errorResponse('error', 404);
    }
    const updates = {};
    updates.companyId = companyId;
    updates.isValidated = true;
    console.log('antes');
    await models.Validatedcompany.update(updates, { where: { companyId: companyId } });
    console.log('despues');
    return succesfullResponse({ message: 'Company updated successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  };
};

import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en indexAffiliationcodeForCompany controller');
  const { companyId } = req.pathParameters;
  try {
    // eslint-disable-next-line max-len
    const affiliationcodes = await models.Affiliationcode.findAll({ where: { companyId: companyId } });
    console.log(affiliationcodes);
    // const users = await models.User.findAll({ where: { companyId: categoryId } });
    return succesfullResponse({ affiliationcodes: affiliationcodes }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

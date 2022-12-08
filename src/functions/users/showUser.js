import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en showUser controller');
  const { id } = req.pathParameters;
  console.log(id);
  try {
    const user = await models.User.findOne({ where: { id: id } });
    const company = await models.Company.findOne({
      where: { id: user.companyId }
    });
    const existingRoles = await models.Roleuser.findAll({ where: { userId: user.id } });
    let seller;
    let buyer;
    const promises = [];
    if (existingRoles) {
      for (const roleuser in existingRoles) {
        promises.push(models.Role.findOne({ where: { id: existingRoles[roleuser].roleId } }));
      }
      const roles = await Promise.all(promises);
      for (const role of roles) {
        if (role.name === 'seller') {
          seller = true;
        }
        if (role.name === 'buyer') {
          buyer = true;
        }
      }
    } else {
      seller = false;
      buyer = false;
    }
    return succesfullResponse({ user: user, company: company, seller: seller, buyer: buyer }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';
import jwt from 'jsonwebtoken';

// checkUser
export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const email = body.email;
    const existingUser = await models.User.findOne({ where: { email } });
    const existingCompany = await models.Company.findOne({ where: { email } });
    if (existingUser) {
      const existingRoles = await models.Roleuser.findAll({ where: { userId: existingUser.id } });
      let seller;
      let buyer;
      if (existingRoles) {
        const promises = [];
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
      // token expires in 24 hours, add buyer and seller
      const token = jwt.sign({
        apiUser: existingUser,
        isSeller: seller,
        isBuyer: buyer
      }, process.env.SECRET_KEY, {
        expiresIn: 86400
      });
      existingUser.token = token;
      return succesfullResponse({ token: token, type: 'user' });
    } else if (existingCompany) {
      // send if validated:
      const validatedCompany = await models.Validatedcompany.findOne({
        where: { companyId: existingCompany.id }
      });
      // token expires in 24 hours
      const token = jwt.sign({
        apiCompany: existingCompany
      }, process.env.SECRET_KEY, {
        expiresIn: 86400
      });
      existingCompany.token = token;
      return succesfullResponse({
        token: token, type: 'company', isValidated: validatedCompany.isValidated
      });
    }
    return errorResponse({ error: 'No user found' });
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

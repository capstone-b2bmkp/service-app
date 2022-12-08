import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';
import { checkRut } from '../../helpers/register/checkRut';

export const handler = async (event) => {
  console.log('estoy en createUser controller');
  try {
    const body = JSON.parse(event.body);
    const {
      name, email, rut, phoneNumber, position, image, buyer, seller, code
    } = body.apiUser;
    const affiliationCode = await models.Affiliationcode.findOne({
      where: { code: code }
    });
    let companyId;
    if (affiliationCode) {
      companyId = affiliationCode.companyId;
      await models.Affiliationcode.destroy({
        where: { id: affiliationCode.id }
      });
    } else {
      return errorResponse('El código no es correcto', 409);
    }
    const existingUser = await models.User.findOne({
      where: { email: email }
    });
    if (existingUser) {
      return errorResponse('El usuario ya existe', 409);
    }
    const existingCompany = await models.Company.findOne({
      where: { email: email }
    });
    if (existingCompany) {
      return errorResponse('El correo ya existe', 409);
    }
    // check if rut is valid:
    const existingUserRut = await models.User.findOne({
      where: { rut }
    });
    if (existingUserRut) {
      return errorResponse('rut ya utilizado', 400);
    }
    const checkRutResult = checkRut(rut);
    if (checkRutResult.statusCode !== 200) {
      return errorResponse({ error: 'bad rut' }, 500);
    }
    const isEmailAdmin = await models.Adminemail.findOne({
      where: { email: email }
    });
    let isAdmin;
    if (isEmailAdmin) {
      isAdmin = true;
    } else {
      isAdmin = false;
    }
    const newUser = await models.User.create({
      companyId,
      name,
      email,
      rut,
      phoneNumber,
      position,
      image: body.userImage,
      isAdmin
    });
    // get user id:
    const userId = newUser.id;
    // flow for roles:
    if (buyer) {
      const buyerRole = await models.Role.findOne({ where: { name: 'buyer' } });
      const roleId = buyerRole.id;
      await models.Roleuser.create({
        userId,
        roleId
      });
    }
    if (seller) {
      const sellerRole = await models.Role.findOne({ where: { name: 'seller' } });
      const roleId = sellerRole.id;
      await models.Roleuser.create({
        userId,
        roleId
      });
    }
    return succesfullResponse({ message: 'Usuario creado correctamente' }, 201);
  } catch (error) {
    return errorResponse(error.message, 500);
  };
};

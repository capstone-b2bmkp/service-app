import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';
import { checkRut } from '../../helpers/register/checkRut';

export const handler = async (event) => {
  console.log('estoy en createCompany controller');
  try {
    const body = JSON.parse(event.body);
    const { name, email, rut, phoneNumber, categoryId, topic } = body.apiCompany;
    const existingCompany = await models.Company.findOne({
      where: { email }
    });
    if (existingCompany) {
      return errorResponse('La empresa ya existe', 409);
    }
    const existingUser = await models.User.findOne({
      where: { email }
    });
    if (existingUser) {
      return errorResponse('El correo ya existe', 409);
    }
    // check if rut is valid:
    const existingCompanyRut = await models.Company.findOne({
      where: { rut }
    });
    if (existingCompanyRut) {
      return errorResponse('rut ya utilizado', 400);
    }
    const checkRutResult = checkRut(rut);
    if (checkRutResult.statusCode !== 200) {
      return errorResponse({ error: 'bad rut' }, 500);
    }
    const newCompany = await models.Company.create({
      name,
      email,
      rut,
      phoneNumber,
      image: body.image,
      topic,
      categoryId
    });
    console.log('newCompany', newCompany);
    const companyId = newCompany.id;
    const isValidated = false;
    // validationCompany
    await models.Validatedcompany.create({
      companyId,
      isValidated
    });
    return succesfullResponse({ message: 'Empresa creada correctamente' }, 201);
  } catch (error) {
    console.log('Error al crear company', error);
    return errorResponse(error.message, 500);
  };
};

import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en createAffiliation controller');
  try {
    const { companyId } = req.pathParameters;
    let code;
    while (true) {
      code = generateCode();
      const relation = await models.Affiliationcode.findOne({
        where: { code: code }
      });
      if (!relation) {
        break;
      }
    }
    const newAffiliation = await models.Affiliationcode.create({
      companyId,
      code
    });
    return succesfullResponse({ message: 'Afiliacion creada correctamente' }, 201);
  } catch (error) {
    return errorResponse(error.message, 500);
  };
};

function generateCode () {
  const digits = '0123456789';
  let code = '';
  for (let i = 0; i < 10; i++) {
    code += digits[Math.floor(Math.random() * 10)];
  }
  return code;
}

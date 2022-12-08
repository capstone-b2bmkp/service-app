import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req) => {
  console.log('estoy en createDiscountrule controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede crear el descuento' }, 500);
    }
    const body = JSON.parse(req.body);
    const minimum = parseInt(body.discountrule.minimum);
    const maximum = parseInt(body.discountrule.maximum);
    const discount = parseInt(body.discountrule.discount);
    const discountrules = await models.Discountrule.findAll();
    // esto revisa que el minimo sea mayor que el maximo
    if (minimum >= maximum) {
      return errorResponse('El valor minimo debe ser menor al valor maximo', 500);
    }
    // esto revisa que el rango no se intercepte con otro rango
    for (let i = 0; i < discountrules.length; i++) {
      if (minimum >= discountrules[i].minimum && minimum <= discountrules[i].maximum) {
        return errorResponse({ error: 'El minimo establecido esta dentro de un rango existente' }, 500);
      }
      if (maximum >= discountrules[i].minimum && maximum <= discountrules[i].maximum) {
        return errorResponse({ error: 'El maximo establecido esta dentro de un rango existente' }, 500);
      }
      if (minimum <= discountrules[i].minimum && maximum >= discountrules[i].maximum) {
        return errorResponse({ error: 'El rango establecido contiene un rango existente' }, 500);
      }
    }
    await models.Discountrule.create({
      minimum,
      maximum,
      discount
    });
    return succesfullResponse({ message: 'Discountrule created successfully' }, 201);
  } catch (error) {
    return errorResponse(error.message, 500);
  };
};

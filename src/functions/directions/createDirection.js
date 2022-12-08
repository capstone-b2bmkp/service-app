import models from '../../models';
import { checkAuth } from '../../helpers/auth/checkAuth';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req) => {
  console.log('estoy en createDirection controller');
  try {
    // esto exige que el usuario este logueado
    const checkValidTokenResult = checkAuth(req);
    if (checkValidTokenResult.statusCode !== 200) {
      return errorResponse({ error: 'Token invalido, no se puede crear la direccion' }, 500);
    }

    const body = JSON.parse(req.body);
    const {
      address,
      region,
      commune,
      number,
      instructions
    } = body.direction;
    const userId = body.userId;
    const direction = await models.Direction.findOne({ where: { userId } });
    if (direction) {
      const updates = {};
      if (userId) {
        updates.userId = userId;
      }
      if (address) {
        updates.address = address;
      }
      if (region) {
        updates.region = region;
      }
      if (commune) {
        updates.commune = commune;
      }
      if (number) {
        updates.number = number;
      }
      if (instructions) {
        updates.instructions = instructions;
      }
      await models.Direction.update(updates, { where: { id: direction.id } });
      return succesfullResponse({ message: 'Direction updated successfully' }, 201);
    }
    await models.Direction.create({
      userId,
      address,
      region,
      commune,
      number,
      instructions
    });
    return succesfullResponse({ message: 'Product created successfully' }, 201);
  } catch (error) {
    console.log(error);
    return errorResponse(error.message, 500);
  };
};

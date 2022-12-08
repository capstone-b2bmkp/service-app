import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  console.log('estoy en updateUser controller');
  try {
    const body = JSON.parse(event.body);
    const { id } = event.pathParameters;
    const {
      name, phoneNumber, position, image, isAdmin, buyer, seller
    } = body.user;
    const user = await models.User.findOne({ where: { id: id } });
    if (!user) {
      return errorResponse(`User with id ${id} not found`, 404);
    }
    const updates = {};
    if (name) {
      updates.name = name;
    }
    if (phoneNumber) {
      updates.phoneNumber = phoneNumber;
    }
    if (position) {
      updates.position = position;
    }
    if (image) {
      updates.image = image;
    }
    if (isAdmin) {
      updates.isAdmin = isAdmin;
    }
    const userId = user.id;
    // check roles
    if (buyer) {
      console.log('buyer');
      const buyerRole = await models.Role.findOne({ where: { name: 'buyer' } });
      console.log('buyer');
      const roleId = buyerRole.id;
      // buyerUser
      await models.Roleuser.create({
        userId,
        roleId
      });
    }
    if (seller) {
      console.log('seller');
      const sellerRole = await models.Role.findOne({ where: { name: 'seller' } });
      console.log('seller');
      const roleId = sellerRole.id;
      // sellerUser
      await models.Roleuser.create({
        userId,
        roleId
      });
    }
    await models.User.update(updates, { where: { id: id } });
    return succesfullResponse({ message: 'User updated successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

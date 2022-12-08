import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (event) => {
  console.log('estoy en updateCompany controller');
  try {
    const body = JSON.parse(event.body);
    const { id } = event.pathParameters;
    const {
      name, phoneNumber, image
    } = body.company;
    const company = await models.Company.findOne({ where: { id: id } });
    if (!company) {
      return errorResponse(`Company with id ${id} not found`, 404);
    }
    const updates = {};
    if (name) {
      updates.name = name;
    }
    if (phoneNumber) {
      updates.phoneNumber = phoneNumber;
    }
    if (image) {
      updates.image = image;
    }
    await models.Company.update(updates, { where: { id: id } });
    return succesfullResponse({ message: 'Company updated successfully' }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

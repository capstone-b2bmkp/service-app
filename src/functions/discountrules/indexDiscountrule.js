import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';
const { Op } = require('sequelize');

export const handler = async (req, res) => {
  console.log('estoy en indexDiscountrule controller');
  try {
    const discountrules = await models.Discountrule.findAll();
    console.log(discountrules);
    return succesfullResponse({ discountrules: discountrules }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

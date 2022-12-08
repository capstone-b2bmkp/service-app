import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en optionsProductVariation controller');

  try {
    const colors = await models.Color.findAll();
    const sizes = await models.Size.findAll();
    const materials = await models.Material.findAll();
    const genders = await models.Gender.findAll();

    console.log('colors', colors);
    console.log('sizes', sizes);
    console.log('materials', materials);
    console.log('genders', genders);
    return succesfullResponse(
      {
        colors: colors, sizes: sizes, materials: materials, genders: genders
      },
      200
    );
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

import models from '../../models';
import { succesfullResponse, errorResponse } from '../../utils/response_util';

export const handler = async (req, res) => {
  console.log('estoy en indexColorvariation controller');
  try {
    const { id } = req.pathParameters;
    const colorVariations = await models.Colorvariation.findAll(
      { where: { productId: id } });
    if (!colorVariations) {
      return errorResponse('Colorvariations not found', 500);
    }
    const colors = await models.Color.findAll();
    const colorsArray = [];
    for (const colorvariation of colorVariations) {
      const colorObject = colors.find((color) => color.id === colorvariation.colorId)?.name;
      colorsArray.push(colorObject);
    };
    const colorsWithIds = [];
    for (let i = 1; i < (colors.length + 1); i++) {
      colorsWithIds.push({ id: i, color: colors[i - 1].name });
    }
    return succesfullResponse({ colorVariations, colors: colorsArray, colorsWithIds }, 200);
  } catch (error) {
    return errorResponse(error.message, 500);
  }
};

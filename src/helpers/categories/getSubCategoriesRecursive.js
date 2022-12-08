import models from '../../models';

export const getSubCategoriesRecursive = async (category) => {
  const subCategories = await models.Category.findAll({
    where: {
      parentId: category.id
    },
    raw: true
  });

  if (subCategories.length > 0) {
    const promises = [];
    subCategories.forEach(subCategory => {
      promises.push(getSubCategoriesRecursive(subCategory));
    });

    category.subCategories = await Promise.all(promises);
  } else category.subCategories = [];
  return category;
};

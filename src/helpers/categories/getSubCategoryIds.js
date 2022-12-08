import models from '../../models';

export const getSubCategoryIds = async (category) => {
  const subCategories = await models.Category.findAll({
    where: {
      parentId: category.id
    },
    raw: true
  });
  const CategoryIds = [category.id];

  if (subCategories.length > 0) {
    const promises = [];
    subCategories.forEach(subCategory => {
      promises.push(getSubCategoryIds(subCategory));
    });

    const subCategoriesId = await Promise.all(promises);
    CategoryIds.push(...subCategoriesId.flat());
  }
  return CategoryIds;
};

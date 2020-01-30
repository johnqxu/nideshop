module.exports = class extends think.Model {
  async getChildCategoryId(parentId) {
    const childIds = await this.where({}).getField('id', 10000);
    return childIds;
  }

  async getCategoryWhereIn(categoryId) {
    const childIds = await this.getChildCategoryId(categoryId);
    childIds.push(categoryId);
    return childIds;
  }
};

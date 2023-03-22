import Category from '../../models/Category';

interface Category {
  id?: string;
  name: string;
}

class CategoryService {
  async save({ name }: Category) {
    const category = await Category.create({ name });
    return category;
  }

  async list() {
    const categories = await Category.find();
    return categories;
  }

  async edit({ id, name }: Category) {
    const category = await Category.findById(id);

    if (!category) {
      throw new Error('category not found');
    }

    if (name) category.name = name;

    await category.save();
    return category;
  }
}

export default new CategoryService();

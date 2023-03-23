import { Types } from 'mongoose';
import Product from '../../models/Product';
import CategoryService from '../Category/CategoryService';

interface ProductProps {
  id?: string;
  name: string;
  price?: number;
  description?: string;
  banner?: string;
  category: Types.ObjectId;
}

class ProductService {
  async save({ name, price, description, banner, category }: ProductProps) {
    if (!name) {
      throw new Error('Field name is mandatory.');
    }

    if (!description) {
      throw new Error('Field description is mandatory.');
    }

    if (!category) {
      throw new Error('Field category is mandatory.');
    }

    const product = await Product.create({
      name,
      price,
      description,
      banner,
      category,
    });

    return product;
  }

  async list() {
    const products = await Product.find().populate('category');
    return products;
  }

  async edit({ id, name, price, description, banner, category }: ProductProps) {
    if (!name) {
      throw new Error('Field name is mandatory.');
    }

    if (!category) {
      throw new Error('Field category is mandatory.');
    }

    const product = await Product.findById(id);

    if (!product) {
      throw new Error('Product not found');
    }

    if (name) product.name = name;
    if (price) product.price = price;
    if (description) product.description = description;
    if (banner) product.banner = banner;
    if (category) product.category = category;

    await product.save();
    return product;
  }

  async listByCategory(category_id: string) {
    const products = await Product.find({ category: category_id }).populate(
      'category'
    );
    return products;
  }
}

export default new ProductService();

import { Request, Response } from 'express';
import ProductService from '../../services/Product/ProductService';

class ProductController {
  async store(req: Request, res: Response) {
    const { name, price, description, category } = req.body;

    if (!req.file) {
      throw new Error('error upload file.');
    } else {
      const { filename } = req.file;

      const product = await ProductService.save({
        name,
        price,
        description,
        banner: filename,
        category,
      });
      return res.status(200).json(product);
    }
  }

  async index(req: Request, res: Response) {
    const products = await ProductService.list();
    return res.status(200).json(products);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, price, description, banner, category } = req.body;

    const product = await ProductService.edit({
      id,
      name,
      price,
      description,
      banner,
      category,
    });

    return res.status(200).json(product);
  }
}

export default new ProductController();

import { Request, Response } from 'express';
import CategoryService from '../../services/Category/CategoryService';

class CategoryController {
  async store(req: Request, res: Response) {
    const { name } = req.body;

    const category = await CategoryService.save({ name });
    return res.status(200).json({ category });
  }

  async index(req: Request, res: Response) {
    const categories = await CategoryService.list();
    return res.status(200).json(categories);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name } = req.body;

    const category = await CategoryService.edit({ id, name });

    return res.status(200).json(category);
  }
}

export default new CategoryController();

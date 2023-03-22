import { Request, Response } from 'express';
import OrderService from '../../services/Order/OrderService';

class OrderController {
  async store(req: Request, res: Response) {
    const { table, status, draft, name } = req.body;

    const order = await OrderService.save({ table, status, draft, name });
    return res.status(200).json(order);
  }

  async index(req: Request, res: Response) {
    const orders = await OrderService.list();
    return res.status(200).json(orders);
  }
}

export default new OrderController();

import { Request, Response } from 'express';
import OrderService from '../../services/Order/OrderService';

class OrderController {
  async store(req: Request, res: Response) {
    const { table, name } = req.body;

    const order = await OrderService.save({ table, name });
    return res.status(200).json(order);
  }

  async index(req: Request, res: Response) {
    const orders = await OrderService.list();
    return res.status(200).json(orders);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { table, status, draft, name } = req.body;

    const order = await OrderService.edit({ id, name, status, draft, table });
    return res.status(200).json(order);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const order = await OrderService.remove(id);
    return res.status(200).json({
      message: `Number order ${order._id} with table ${order.table} removed`,
    });
  }

  async sendOrder(req: Request, res: Response) {
    const { order_id } = req.body;

    const order = await OrderService.sendOrder(order_id);
    return res
      .status(200)
      .json({ message: `Order ${order._id} sent with success.` });
  }
}

export default new OrderController();

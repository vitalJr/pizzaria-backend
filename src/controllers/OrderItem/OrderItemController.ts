import { Request, Response } from 'express';
import OrderItemService from '../../services/OrderItem/OrderItemService';

class OrderItemController {
  async store(req: Request, res: Response) {
    const { amount, product_id, order_id } = req.body;

    const orderItem = await OrderItemService.save({
      amount,
      product_id,
      order_id,
    });
    return res.status(200).json(orderItem);
  }

  async index(req: Request, res: Response) {
    const orderItens = await OrderItemService.list();
    return res.status(200).json(orderItens);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const orderItem = await OrderItemService.remove(id);
    return res.status(200).json({ message: `Item ${orderItem._id} removed` });
  }

  async getOrderDeatil(req: Request, res: Response) {
    const { orderId } = req.body;

    const orderDetail = await OrderItemService.findOrderDetail(orderId);
    return res.status(200).json(orderDetail);
  }
}

export default new OrderItemController();

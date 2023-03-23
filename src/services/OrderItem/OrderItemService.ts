import OrderItem from '../../models/OrderItem';

interface OrderItemProps {
  id?: string;
  amount: number;
  order_id: string;
  product_id: string;
}

class OrderItemService {
  async save({ amount, order_id, product_id }: OrderItemProps) {
    const orderItem = await OrderItem.create({
      amount,
      orderId: order_id,
      productId: product_id,
    });

    return orderItem;
  }

  async list() {
    const orderItens = await OrderItem.find()
      .populate('orderId')
      .populate('productId');
    return orderItens;
  }

  async remove(orderItem_id: string) {
    const orderItem = await OrderItem.findById(orderItem_id);

    if (!orderItem) {
      throw new Error("Item doesn't exist anymore");
    }

    await orderItem.deleteOne();
    return orderItem;
  }

  async findOrderDetail(order_id: string) {
    const orderDeatil = await OrderItem.find({ orderId: order_id })
      .populate('orderId')
      .populate('productId');
    return orderDeatil;
  }
}

export default new OrderItemService();

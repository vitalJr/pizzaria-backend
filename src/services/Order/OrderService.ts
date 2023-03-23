import Order from '../../models/Order';

interface OrderProps {
  id?: string;
  table: number;
  status?: boolean;
  draft?: boolean;
  name?: string;
}

class OrderService {
  async save({ table, name }: OrderProps) {
    const existTable = await Order.findOne({ table });

    if (existTable) {
      throw new Error('Table is already open');
    }

    if (!table) {
      throw new Error('Table number is mandatory.');
    }

    const order = await Order.create({ table, name });
    return order;
  }

  async list() {
    const orders = await Order.find();
    return orders;
  }

  async edit({ id, table, status, draft, name }: OrderProps) {
    const order = await Order.findById(id);

    if (!order) {
      throw new Error('Order not found.');
    }

    if (table) order.table = table;
    if (status) order.status = status;
    if (draft) order.draft = draft;
    if (name) order.name = name;

    await order.save();
    return order;
  }

  async remove(id: string) {
    const order = await Order.findById(id);

    if (!order) {
      throw new Error('Order not found.');
    }

    await order.deleteOne();
    return order;
  }

  async sendOrder(order_id: string) {
    const order = await Order.findById(order_id);

    if (!order) {
      throw new Error('Order not found.');
    }

    order.draft = false;

    await order.save();
    return order;
  }

  async listOrderFinished() {
    const orders = await Order.find({ draft: false, status: false }).sort({
      createdAt: -1,
    });
    return orders;
  }

  async closingOrder(orderId: string) {
    const order = await Order.findById(orderId);

    if (!order) {
      throw new Error('Order not found.');
    }

    order.status = true;

    await order.save();
    return order;
  }
}

export default new OrderService();

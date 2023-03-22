import Order from '../../models/Order';

interface OrderProps {
  id?: string;
  table: number;
  status: boolean;
  draft: boolean;
  name?: string;
}

class OrderService {
  async save({ table, status, draft, name }: OrderProps) {
    if (!table) {
      throw new Error('Table number is mandatory.');
    }

    const order = await Order.create({ table, status, draft, name });
    return order;
  }

  async list() {
    const orders = await Order.find();
    return orders;
  }
}

export default new OrderService();

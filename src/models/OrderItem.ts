import { Schema, model } from 'mongoose';

const OrderItemSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
    orderId: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
    },
  },
  { timestamps: true }
);

export default model('OrderItem', OrderItemSchema);

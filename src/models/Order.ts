import { Schema, model } from 'mongoose';

const OrderSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
    },
    table: {
      type: Number,
      require: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    draft: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

export default model('Order', OrderSchema);

import { Schema, model } from 'mongoose';

const ProductSchema = new Schema(
  {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      require: false,
    },
    banner: {
      type: String,
      require: false,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
  },
  { timestamps: true }
);

export default model('Product', ProductSchema);

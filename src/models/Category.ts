import { Schema, model } from 'mongoose';

const CategorySchema = new Schema(
  {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default model('Category', CategorySchema);

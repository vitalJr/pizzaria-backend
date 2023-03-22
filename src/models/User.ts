import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  show: Function;
}

const UserSchema = new Schema(
  {
    id: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true, lowercase: true },
    password: { type: String, require: true },
  },
  { timestamps: true }
);

UserSchema.methods.show = function () {
  return {
    _id: this._id,
    name: this.name,
    email: this.email,
  };
};

export default model<IUser>('User', UserSchema);

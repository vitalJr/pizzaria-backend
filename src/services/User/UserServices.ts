import User from "../../models/User";
import { hash } from "bcryptjs";

interface UserCreateRequest {
  id?: string;
  name: string;
  email: string;
  password: string;
}

class UserService {
  async save({ name, email, password }: UserCreateRequest) {
    const user = await User.findOne({ email });

    if (!email) {
      throw new Error("Inform an e-mail");
    }

    if (user) {
      throw new Error("User already exist.");
    }

    const passwordHash = await hash(password, 8);

    const u = await User.create({ name, email, password: passwordHash });
    return u.show();
  }

  async list() {
    const users = await User.find({});
    return users;
  }

  async edit({ id, name, email, password }: UserCreateRequest) {
    const user = await User.findById(id);

    if (!user) {
      throw new Error("User not found.");
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = await hash(password, 8);

    await user.save();
    return user;
  }

  async getDetailUser(email: string) {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found.");
    }

    return user.show();
  }

  async getUserByToken(token: string) {
    const user = await User.findOne({ token });

    if (!user) {
      throw new Error("User not found.");
    }

    return user;
  }

  async remove(id: string) {
    const user = await User.findById(id);

    if (!user) {
      throw new Error("User not found.");
    }

    await user.deleteOne();
    return user;
  }
}

export default new UserService();

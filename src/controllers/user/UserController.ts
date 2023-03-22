import { Request, Response } from 'express';
import User from '../../models/User';
import UserServices from '../../services/User/UserServices';

class UserController {
  async store(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const userRegistered = await UserServices.save({ name, email, password });
    return res.status(200).json({ user: userRegistered });
  }

  async index(req: Request, res: Response) {
    const users = await UserServices.list();
    return res.status(200).json(users);
  }

  async find(req: Request, res: Response) {
    const { email } = req.body;

    const user = await UserServices.getDetailUser(email);
    return res.status(200).json({ user });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const editedUser = await UserServices.edit({ id, name, email, password });
    return res.status(200).json({ user: editedUser.show() });
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const removedUser = await UserServices.remove(id);
    return res
      .status(200)
      .json({ message: `User ${removedUser?.name} was removed.` });
  }
}

export default new UserController();

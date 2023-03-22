import { Request, Response } from 'express';
import AuthuserService from '../../services/User/AuthUserService';

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const auth = await AuthuserService.execute({ email, password });
    return res.status(200).json({ user: auth.user, token: auth.token });
  }
}

export default new AuthUserController();

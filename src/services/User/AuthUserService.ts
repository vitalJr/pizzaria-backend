import User from '../../models/User';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import jwtConfig from '../../config/jwt';

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await User.findOne({ email: email });

    if (!user) {
      throw new Error('Email or password incorrect.  1');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Email or password incorrect.2');
    }

    const token = sign(
      {
        name: user.name,
        email: user.email,
      },
      jwtConfig.jwt_secret,
      { subject: String(user.id), expiresIn: '30d' }
    );

    return { user: user.show(), token };
  }
}

export default new AuthUserService();

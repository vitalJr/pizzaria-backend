import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import jwtConfig from '../config/jwt';

interface PayLoad {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, jwtConfig.jwt_secret, {}) as PayLoad;

    //Recovery token id and put inside the request
    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}

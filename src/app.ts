import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import './database';
import path from 'path';

const app = express();
app.use(express.json());

app.use(cors());
app.use(routes);

routes.use('/files', express.static(path.resolve(__dirname, '..', 'temp')));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    //iF was instance error
    return res.status(400).json({ error: err.message });
  }

  return res.status(500).json({
    error: 'error',
    message: 'Interal server error.',
  });
});

export default app;

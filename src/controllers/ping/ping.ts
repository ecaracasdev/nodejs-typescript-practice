import { Request, Response } from 'express';

const controller = (_req: Request, res: Response) => {
  console.log('some response');
  res.send('pong');
}

export default controller
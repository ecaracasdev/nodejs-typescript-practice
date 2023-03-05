import { Request, Response } from 'express';

const controller = (_req: Request, res: Response) => {
  console.log('some response');
  res.send('post user');
};

export default controller
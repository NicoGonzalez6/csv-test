import { Request, Response } from 'express';
import { getInfo } from '../services/users.services';

export const getFileInfo = async (req: Request, res: Response) => {
  const { q } = req.query;
  const response = await getInfo(q as string);
  res.status(200).json({ fileInfo: response });
};

import { Request, Response } from 'express';
import { getInfo } from '../services/users.services';
import { StatusCodes } from 'http-status-codes';

export const getFileInfo = async (req: Request, res: Response) => {
  const { q } = req.query;
  const response = await getInfo(q as string);
  res.status(StatusCodes.OK).json({ ...response });
};

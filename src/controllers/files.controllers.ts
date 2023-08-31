import { Request, Response } from 'express';
import { fileServices } from '../services/files.services';
import { IFile } from '../globals/types/files.type';

export const filesController = async (req: Request, res: Response) => {
  const response = await fileServices(req.file as IFile);
  return res.status(200).json({ fileData: response });
};

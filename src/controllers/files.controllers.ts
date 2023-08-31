import { Request, Response } from 'express';
import { uploadFile } from '../services/files.services';
import { IFile } from '../globals/types/files.type';

export const uploadCsvFile = async (req: Request, res: Response) => {
  const response = await uploadFile(req.file as IFile);
  return res.status(200).json({ message: 'File upload successfully', data: response });
};

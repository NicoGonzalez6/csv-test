import { Request, Response } from 'express';
import { uploadFile } from '../services/files.services';
import { IFile } from '../globals/types/files.type';
import { StatusCodes } from 'http-status-codes';

export const uploadCsvFile = async (req: Request, res: Response) => {
  const response = await uploadFile(req.file as IFile);
  res.status(StatusCodes.CREATED).json({ message: 'File upload successfully', data: response });
};

import { Request, Response, NextFunction } from 'express';
import customErr from '../../errors';

export const fileValidation = ({ fileType, maxFileSize }: { fileType: string; maxFileSize: number }) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const MAX_FILE_MB = maxFileSize;
    if (!req.file) {
      throw new customErr.badRequest('No file provided');
    } else if (req.file?.mimetype !== fileType) {
      throw new customErr.badRequest('Invalid File Type');
    } else if (req.file.size > MAX_FILE_MB) {
      throw new customErr.badRequest('3mb file only');
    }
    return next();
  };
};

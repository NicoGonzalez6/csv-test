import { Router } from 'express';
import { uploadCsvFile } from '../controllers/files.controllers';
import { multerMiddleware } from '../app';
import { fileValidation } from '../middlewares/files/fileValidator';

const router = Router();

router.post(
  '/',
  multerMiddleware.single('file'),
  fileValidation({ fileType: 'text/csv', maxFileSize: 3000000 }),
  uploadCsvFile,
);

export default router;

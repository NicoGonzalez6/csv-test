import { Router } from 'express';
import { getFileInfo } from '../controllers/users.controllers';

const router = Router();

router.get('/', getFileInfo);

export default router;

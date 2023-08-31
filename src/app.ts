import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './middlewares/errors/globalErrorHandler';
import router from './routes';
import multer from 'multer';

const app: Express = express();

const storage = multer.memoryStorage();
export const multerMiddleware = multer({ storage: storage });

app.use(cors());
app.use(express.json());

app.use('/api', router);
app.use('/api', (_, res) => {
  res.send('backend app');
});

app.use(globalErrorHandler);

export default app;

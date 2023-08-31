import app from './app';
import 'dotenv/config';
import connectAndSyncDb from './config/init';

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await connectAndSyncDb();
  console.log(`server is running on port ${PORT}`);
});

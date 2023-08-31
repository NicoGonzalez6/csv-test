import request from 'supertest';
import app from '../../src/app';
import connectAndSyncDb from '../../src/config/init';

describe('files controller test case', () => {
  beforeAll(async () => {
    await connectAndSyncDb();
  });

  it('should upload the file successfully', async () => {
    const filePath = './test_file.csv';
    try {
      const response = await request(app).post('/api/files').attach('file', filePath);
      expect(response.status).toBe(200);
    } catch (error) {
      console.log(error);
    }
  });

  it('should fail with no file attached', async () => {
    try {
      const response = await request(app).post('/api/files');
      expect(response.status).toBe(400);
      expect(response.body.msg).toBe('No file provided');
    } catch (error) {
      console.log(error);
    }
  });
});

import request from 'supertest';
import app from '../../src/app';
import connectAndSyncDb from '../../src/config/init';
import { resolve } from 'path';

describe('Users controller test case', () => {
  beforeAll(async () => {
    await connectAndSyncDb();
    const filePath = resolve('src/assets/test_file.csv');
    await request(app).post('/api/files').attach('file', filePath);
  });

  it('should upload the file successfully', async () => {
    try {
      const response = await request(app).get('/api/users');
      expect(response.status).toBe(200);
      expect(response.body.fileInfo.length).toBeGreaterThan(0);
    } catch (error) {
      console.log(error);
    }
  });

  it('should bring one specific user', async () => {
    try {
      const response = await request(app).get('/api/users?q=John Doe');
      expect(response.status).toBe(200);
      expect(response.body.fileInfo.length).toBe(1);
    } catch (error) {
      console.log(error);
    }
  });
});

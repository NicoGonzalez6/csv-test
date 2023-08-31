import request from 'supertest';
import app from '../../src/app';
import connectAndSyncDb from '../../src/config/init';
import { resolve } from 'path';

describe('files controller test case', () => {
  beforeAll(async () => {
    await connectAndSyncDb();
  });

  it('should upload the file successfully', async () => {
    const filePath = resolve('src/assets/test_file.csv');

    const response = await request(app).post('/api/files').attach('file', filePath);
    expect(response.status).toBe(201);
  });

  it('should fail with no file attached', async () => {
    const response = await request(app).post('/api/files');
    expect(response.status).toBe(400);
    expect(response.body.message).toBe('No file provided');
  });
});

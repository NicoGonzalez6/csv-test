import request from 'supertest';
import app from '../src/app';

describe('server app test', () => {
  it('server should be up', async () => {
    const response = await request(app).get('/api');
    expect(response.text).toEqual('backend app');
    expect(response.status).toEqual(200);
  });
});

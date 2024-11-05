import request from 'supertest';
import app from '../index';

describe('Order API', () => {
  it('should create an order', async () => {
    const response = await request(app)
      .post('/orders')
      .send({
        productId: 1,
        quantity: 2,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should get all orders', async () => {
    const response = await request(app).get('/orders');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});

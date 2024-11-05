import request from 'supertest';
import app from '../index'; 

describe('Product API', () => {
  it('should create a product', async () => {
    const response = await request(app)
      .post('/products')
      .send({
        name: 'Test Product',
        description: 'This is a test product',
        price: 10.99,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('should get all products', async () => {
    const response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});

import express from 'express';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

export default app;

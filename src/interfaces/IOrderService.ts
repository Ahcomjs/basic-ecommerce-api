import { Order } from '@prisma/client';

interface IOrderService {
  createOrder(order: Order): Promise<Order>;
  getAllOrders(): Promise<Order[]>;
  getOrderById(id: number): Promise<Order | null>;
}

export default IOrderService;

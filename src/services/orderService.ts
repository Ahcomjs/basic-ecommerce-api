import { PrismaClient, Order, Product } from '@prisma/client';
import IOrderService from '../interfaces/IOrderService';
import { SHIPPING_FEE } from '../utils/constants';
 

class OrderService implements IOrderService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createOrder(order: Order): Promise<Order> {
    const product: Product | null = await this.prisma.product.findUnique({ where: { id: order.productId } });
    if (!product) throw new Error('Product not found');

    order.totalPrice = product.price * order.quantity + SHIPPING_FEE;

    return await this.prisma.order.create({ data: order });
  }

  async getAllOrders(): Promise<Order[]> {
    return await this.prisma.order.findMany();
  }

  async getOrderById(id: number): Promise<Order | null> {
    return await this.prisma.order.findUnique({ where: { id } });
  }
}

export default new OrderService();

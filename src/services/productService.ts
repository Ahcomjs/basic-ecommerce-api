import { PrismaClient, Product } from '@prisma/client';
import IProductService from '../interfaces/IProductService';

class ProductService implements IProductService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  async getProductById(id: number): Promise<Product | null> {
    return await this.prisma.product.findUnique({ where: { id } });
  }

  async createProduct(product: Product): Promise<Product> {
    return await this.prisma.product.create({ data: product });
  }

  async updateProduct(id: number, product: Product): Promise<Product> {
    return await this.prisma.product.update({
      where: { id },
      data: product,
    });
  }

  async deactivateProduct(id: number): Promise<void> {
    await this.prisma.product.update({
      where: { id },
      data: { isActive: false },
    });
  }
}

export default new ProductService();

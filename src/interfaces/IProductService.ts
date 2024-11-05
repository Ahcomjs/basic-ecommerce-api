import { Product } from '@prisma/client';

interface IProductService {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | null>;
  createProduct(product: Product): Promise<Product>;
  updateProduct(id: number, product: Product): Promise<Product>;
  deactivateProduct(id: number): Promise<void>; 
}

export default IProductService;

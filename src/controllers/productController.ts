import { Request, Response } from 'express';
import productService from '../services/productService';

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = await productService.getProductById(parseInt(req.params.id));
    res.json(product);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.json(newProduct);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedProduct = await productService.updateProduct(parseInt(req.params.id), req.body);
    res.json(updatedProduct);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const deactivateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    await productService.deactivateProduct(parseInt(req.params.id));
    res.json({ message: 'Product deactivated' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

import { Request, Response } from 'express';
import orderService from '../services/orderService';

export const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const newOrder = await orderService.createOrder(req.body);
    res.json(newOrder);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

export const getOrderById = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = await orderService.getOrderById(parseInt(req.params.id));
    res.json(order);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error' });
    }
  }
};

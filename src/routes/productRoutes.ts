import express from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deactivateProduct } from '../controllers/productController';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.put('/deactivate/:id', deactivateProduct);

export default router;

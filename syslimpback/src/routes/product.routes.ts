import { Router} from 'express';

const router = Router();
import {getProducts, saveProduct} from '../controllers/product.controller';

router.get('/products', getProducts);
router.post('/addProducts',  saveProduct);
// router.get('/users/:id', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
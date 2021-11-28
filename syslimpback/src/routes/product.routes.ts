import { Router} from 'express';

const router = Router();
import {getProduct} from '../controllers/product.controller';

router.get('/products', getProduct);
// router.get('/users/:id', );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
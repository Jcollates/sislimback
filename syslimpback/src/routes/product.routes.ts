import { Router} from 'express';

const router = Router();
import {getProducts, saveProduct, getEspecifictProduct} from '../controllers/product.controller';

router.get('/products', getProducts);
router.post('/addProducts',  saveProduct);
router.get('/getUniqueProduct/:codeproduct',  getEspecifictProduct);



export default router; 
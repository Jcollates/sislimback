import { Router} from 'express';

const router = Router();
import {getSolProdcutByUser, getSolProducts, saveSolProduct} from '../controllers/solproduct.controllers';

router.get('/solProducts', getSolProducts);
router.post('/addSolProducts',  saveSolProduct);
router.get('/solProducts/:codeuser',  getSolProdcutByUser);



export default router; 
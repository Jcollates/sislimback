import { Router} from 'express';

const router = Router();
import {getSolProdcutByUser, getSolProducts, saveSolProduct, updateSoltPro} from '../controllers/solproduct.controllers';

router.get('/solProducts', getSolProducts);
router.post('/addSolProducts',  saveSolProduct);
router.get('/solProducts/:codeuser',  getSolProdcutByUser);
router.post('/updateSol',  updateSoltPro);



export default router; 
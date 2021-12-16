import { Router} from 'express';

const router = Router();
import {getBuysByUser, getBuys, saveBuyHistory, updateBuys} from '../controllers/buyHistory.controllers';

router.get('/buys', getBuys);
router.get('/buys/:codeuser', getBuysByUser);
router.post('/saveBuys',  saveBuyHistory);
router.post('/updateBuys', updateBuys );
// router.delete('/users:id', );



export default router; 
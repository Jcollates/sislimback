import { Router} from 'express';

const router = Router();
import {getCatProducts, createCatproduct} from '../controllers/catproduct.controllers';

router.get('/catproducts', getCatProducts);
router.post('/createCatpro', createCatproduct);
// router.get('/users/:id', );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
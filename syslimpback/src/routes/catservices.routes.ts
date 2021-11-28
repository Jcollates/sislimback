import { Router} from 'express';

const router = Router();
import {getCatServices, createCatService} from '../controllers/catservices.controllers';

router.get('/catservices', getCatServices);
router.post('/createCatServices', createCatService);
// router.get('/users/:id', );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
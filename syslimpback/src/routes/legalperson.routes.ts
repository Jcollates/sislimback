import { Router} from 'express';

const router = Router();
import {getLegalperson} from '../controllers/legalperson.controller';

router.get('/legalperson', getLegalperson);
// router.get('/users/:id', );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
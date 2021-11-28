import { Router} from 'express';

const router = Router();
import {getProviders} from '../controllers/provider.controller';

router.get('/providers', getProviders);
// router.get('/users/:id', );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
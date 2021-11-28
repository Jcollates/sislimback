import { Router} from 'express';

const router = Router();
import {getService} from '../controllers/service.controller';

router.get('/services', getService);
// router.get('/users/:id', );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router;
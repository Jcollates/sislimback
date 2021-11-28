import { Router} from 'express';

const router = Router();
import {getMeet} from '../controllers/meet.controllers';

router.get('/meet', getMeet);
// router.get('/users/:id', );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
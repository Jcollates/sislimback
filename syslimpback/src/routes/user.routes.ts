import { Router} from 'express';

const router = Router();
import {getUsers} from '../controllers/user.controllers';

router.get('/users', getUsers);
// router.get('/users/:id', );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
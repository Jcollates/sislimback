import { Router} from 'express';

const router = Router();
import {doLogin, getLoginUsers, createUser} from '../controllers/loginUser.controllers';

router.get('/auth', getLoginUsers);
router.post('/auth/login', doLogin );
router.post('/createUser', createUser );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
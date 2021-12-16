import { Router} from 'express';

const router = Router();
import {doLogin, getLoginUsers, createUser, updateLoginUSer} from '../controllers/loginUser.controllers';

router.get('/auth', getLoginUsers);
router.post('/auth/login', doLogin );
router.post('/createUser', createUser );
router.post('/updateLoginUSer', updateLoginUSer);
// router.delete('/users:id', );



export default router; 
import { Router} from 'express';

const router = Router();
import {getUniqueUSer, getUsers, saveNewUser} from '../controllers/user.controllers';

router.get('/users', getUsers);
router.get('/users/:loginuser_codeuser', getUniqueUSer);
router.post('/saveNewUser',  saveNewUser);
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
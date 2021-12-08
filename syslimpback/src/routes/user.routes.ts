import { Router} from 'express';

const router = Router();
import {getUniqueUSer, getUsers, saveNewUser, updateUserData} from '../controllers/user.controllers';

router.get('/users', getUsers);
router.get('/users/:loginuser_codeuser', getUniqueUSer);
router.post('/saveNewUser',  saveNewUser);
router.post('/updateDataUser', updateUserData );
// router.delete('/users:id', );



export default router; 
import { Router} from 'express';

const router = Router();
import {getEmployees} from '../controllers/employee.controllers';

router.get('/employ', getEmployees);
// router.get('/users/:id', );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
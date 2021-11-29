import { Router} from 'express';

const router = Router();
import {createEmployee, getEmployees} from '../controllers/employee.controllers';

router.get('/employ', getEmployees);
// router.get('/users/:id', );
router.post('/createEmploy',createEmployee);
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
import { Router} from 'express';

const router = Router();
import {createEmployee, getEmployees, getEmployeesAssigned, getEmployeesToAssing, updateEmploye} from '../controllers/employee.controllers';

router.get('/employ', getEmployees);
router.get('/assignedEmploy', getEmployeesAssigned );
router.get('/toAssignedEmploy', getEmployeesToAssing );
router.post('/createEmploy',createEmployee);
router.put('/updatemeploy', updateEmploye);
// router.delete('/users:id', );



export default router; 
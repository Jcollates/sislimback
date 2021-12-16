import { Router} from 'express';

const router = Router();
import {createCustomerService, getCustomerService} from '../controllers/customerservice.constrollers';

router.get('/getCustomerSer', getCustomerService);
router.post('/addCustomerSer', createCustomerService);



export default router; 
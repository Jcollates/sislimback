import { Router} from 'express';

const router = Router();
import {getAgreements} from '../controllers/agreement.controllers';

router.get('/agreements', getAgreements);
// router.get('/users/:id', );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
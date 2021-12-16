import { Router} from 'express';

const router = Router();
import {addAgreement, getAgreements} from '../controllers/agreement.controllers';

router.get('/agreements', getAgreements);
router.post('/addAgreements', addAgreement);
// router.post('/users', );
// router.delete('/users:id', );



export default router; 
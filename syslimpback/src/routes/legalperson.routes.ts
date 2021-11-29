import { Router} from 'express';

const router = Router();
import {addLegalperson, getLegalperson} from '../controllers/legalperson.controller';

router.get('/legalperson', getLegalperson);
router.post('/addLegalperson', addLegalperson );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
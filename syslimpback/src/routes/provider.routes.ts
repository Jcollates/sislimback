import { Router} from 'express';

const router = Router();
import {createProvider, getProviders} from '../controllers/provider.controller';

router.get('/providers', getProviders);
router.post('/createProvider', createProvider );



export default router; 
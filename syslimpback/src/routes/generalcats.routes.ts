import { Router} from 'express';

const router = Router();
import {getGeneralCats, getBycodeCat} from '../controllers/generalCat.controllers';

router.get('/getCatalogue', getGeneralCats);
router.get('/getCatalogueBycat/:codeCat', getBycodeCat );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
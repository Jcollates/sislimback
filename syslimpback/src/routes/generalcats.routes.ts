import { Router} from 'express';

const router = Router();
import {getGeneralCats, getBycodeCat, getBycodeCatAndFather} from '../controllers/generalCat.controllers';

router.get('/getCatalogue', getGeneralCats);
router.get('/getCatalogueBycat/:codeCat', getBycodeCat );
router.get('/getCatalogueBycatFather/:codeCat/:codeFather/:codeCatFather', getBycodeCatAndFather );
// router.post('/users', );
// router.put('/users', );
// router.delete('/users:id', );



export default router; 
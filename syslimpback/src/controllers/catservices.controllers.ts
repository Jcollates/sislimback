import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {CatServices} from '../entity/catservices';
export const getCatServices = async (req: Request, res: Response): Promise<Response> =>{
    const servicescat = await getRepository(CatServices).find();
    return res.json(servicescat);
}

export const createCatService  = async (req: Request, res: Response): Promise<Response> =>{
    // const newProductCat = getRepository(CatProducts).create(req.body);
    const catService: CatServices = new CatServices();
    catService.codeservice = req.body.codeservice;
    catService.nameservice = req.body.nameservice;
    catService.description = req.body.description;
    catService.img = req.body.img;
    catService.meterprize =req.body.meterprize;
    catService.type = req.body.type;
    catService.hourprize = req.body.hourprize;
    catService.seqcatservice = req.body.seqcatservice;
    const whatSAve = await getRepository(CatServices).save(catService);
    return res.json(whatSAve);
    
}
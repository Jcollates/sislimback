import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {CatProducts} from '../entity/catproducts';
import fs from 'fs';


export const getCatProducts = async (req: Request, res: Response): Promise<Response> =>{
    const productsCat = await getRepository(CatProducts).find();
    return res.json(productsCat);
}

export const createCatproduct  = async (req: Request, res: Response): Promise<Response> =>{
    // const newProductCat = getRepository(CatProducts).create(req.body);
    const capproduct: CatProducts = new CatProducts();
    capproduct.codeproduct = req.body.codeproduct;
    capproduct.nameproduct = req.body.nameproduct;
    capproduct.description = req.body.description;
    capproduct.img = req.body.img;
    capproduct.saleprize =req.body.saleprize;
    capproduct.seqcatproduct = req.body.seqcatproduct;
    const whatSAve = await getRepository(CatProducts).save(capproduct);
    return res.json(whatSAve);
    
}

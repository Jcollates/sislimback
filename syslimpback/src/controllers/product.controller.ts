import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {Product} from '../entity/product';
export const getProducts= async (req: Request, res: Response): Promise<Response> =>{
    const products = await getRepository(Product).find();
    return res.json(products);
}
export const saveProduct= async (req: Request, res: Response): Promise<Response> =>{
    const products = await getRepository(Product).save(req.body);
    return res.json(products);
}
export const getEspecifictProduct= async (req: Request, res: Response): Promise<Response> =>{
    const products = await getRepository(Product).findOne({codeproduct: req.params.codeproduct});
    return res.json(products);
}
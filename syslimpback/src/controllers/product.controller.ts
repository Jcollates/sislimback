import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {Product} from '../entity/product';
export const getProduct= async (req: Request, res: Response): Promise<Response> =>{
    const products = await getRepository(Product).find();
    return res.json(products);
}
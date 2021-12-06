import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {SolProduct} from '../entity/solproduct';
export const getSolProducts= async (req: Request, res: Response): Promise<Response> =>{
    const solProducts = await getRepository(SolProduct).find();
    return res.json(solProducts);
}
export const saveSolProduct= async (req: Request, res: Response): Promise<Response> =>{
    const solProducts = await getRepository(SolProduct).save(req.body);
    return res.json(solProducts);
}
export const getSolProdcutByUser= async (req: Request, res: Response): Promise<Response> =>{
    const solProducts = await getRepository(SolProduct).find({codeuser: Number(req.params.codeuser) });
    return res.json(solProducts);
}
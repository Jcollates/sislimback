import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {BuyHistory} from '../entity/buyHistory';
export const getBuys = async (req: Request, res: Response): Promise<Response> =>{
    const buys = await getRepository(BuyHistory).find();
    return res.json(buys);
}
export const getBuysByUser = async (req: Request, res: Response): Promise<Response> =>{
    const buys = await getRepository(BuyHistory).find({codeuser: Number(req.params.loginuser_codeuser)});
    return res.json(buys);
}
export const saveBuyHistory= async (req: Request, res: Response): Promise<Response> =>{
    const buys = await getRepository(BuyHistory).save(req.body);
    return res.json(buys);
}
export const updateBuys = async (req: Request, res: Response): Promise<Response> =>{
    const buys = await getRepository(BuyHistory).save(req.body);
    return res.json(buys);
}
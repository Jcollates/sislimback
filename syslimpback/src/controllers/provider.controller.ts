import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {Provider} from '../entity/provider';
export const getProviders = async (req: Request, res: Response): Promise<Response> =>{
    const providers = await getRepository(Provider).find();
    return res.json(providers);
}
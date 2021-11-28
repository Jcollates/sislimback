import {Request,Response}  from 'express';
import {getRepository}  from 'typeorm';
import {Service} from '../entity/service';
export const getService = async (req: Request, res: Response): Promise<Response> =>{
    const services = await getRepository(Service).find();
    return res.json(services);
}
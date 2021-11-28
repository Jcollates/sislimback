import {Request,Response}  from 'express';
import {getRepository}  from 'typeorm';
import {Meet} from '../entity/meet';
export const getMeet = async (req: Request, res: Response): Promise<Response> =>{
    const meets = await getRepository(Meet).find();
    return res.json(meets);
}
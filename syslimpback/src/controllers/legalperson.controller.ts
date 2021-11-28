import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {LegalPerson} from '../entity/legalperson';
export const getLegalperson = async (req: Request, res: Response): Promise<Response> =>{
    const legalperson = await getRepository(LegalPerson).find();
    return res.json(legalperson);
}
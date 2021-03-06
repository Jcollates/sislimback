import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {Agreement} from '../entity/agreement';
export const getAgreements = async (req: Request, res: Response): Promise<Response> =>{
    const agreements = await getRepository(Agreement).find();
    return res.json(agreements);
}

export const addAgreement = async (req: Request, res: Response): Promise<Response> =>{
    const savedaggre = await getRepository(Agreement).save(req.body);
    return res.json(savedaggre);
}
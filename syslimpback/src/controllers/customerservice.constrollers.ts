import {Request,Response}  from 'express';
import {getRepository, createConnection, IsNull, Not}  from 'typeorm';
import {CustomerService} from '../entity/customerservice';
export const getCustomerService = async (req: Request, res: Response): Promise<Response> =>{
    const customerService = await getRepository(CustomerService).find();
    return res.json(customerService);
}

export const createCustomerService = async (req: Request, res: Response): Promise<Response> =>{
    const whatSAve = await getRepository(CustomerService).save(req.body);
    return res.json(whatSAve);
    
}
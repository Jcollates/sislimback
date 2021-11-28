import {Request,Response}  from 'express';
import {getRepository, createConnection}  from 'typeorm';
import {Employee} from '../entity/employee';
export const getEmployees = async (req: Request, res: Response): Promise<Response> =>{
    const employees = await getRepository(Employee).find();
    return res.json(employees);
}